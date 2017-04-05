import { RAW_TEXT_CHANGED, CREATE_NOTE, RECEIVE_NOTES } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
// import axios from 'axios';
import SummaryTool from 'node-summary';
// var http = require("http");


export const rawTextChanged = (rawText) => {
  return {
    type: RAW_TEXT_CHANGED,
    rawText
  };
};

export const createNote = (rawText) => {
  const { currentUser } = firebase.auth();

  summarizeText(rawText);

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .push({ rawText })
    .then(() => {
      dispatch({type: CREATE_NOTE});
      Actions.notesIndex();
    });
  };
};
// U6ObsUAChQmsh24c0cDRzjYQvwwep1pZmiyjsnQZG8rYX9x8do
const summarizeText = (rawText) => {
  let length = 2;
  let title = 'SUMMARY';
  var data = new FormData();

data.append("sm_api_input", `${rawText}`);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(JSON.parse(this.response));
  }
});

xhr.open("POST", "http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3");
xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("postman-token", "56c301ef-6848-acb3-beba-70743a28cd9b");

xhr.send(data);
  //
  // rawText.split('. ')
  //
  // console.log(rawText);
  // SummaryTool.summarize(title, rawText, function(err, summary) {
  // 	if(err) console.log("Something went wrong man!");
  //
  // 	console.log(summary);
  // });
  //use figaro to hide api key


  // axios.post('&SM_URL=https://en.wikipedia.org/wiki/Computer')
  //      .then(res => console.log(res));

  // axios({
  //   method: 'post',
  //   url: 'http://api.smmry.com/',
  //   params: {
  //    "SM_API_KEY": "2CA94C7AE9",
  //    "SM_LENGTH": 1
  //  },
  //  headers: {
  //    "Authorization": '["Expect:"]'
  //  },
  //  contentType: 'application/json',
  //  dataType: 'json',
  //  data: {
  //    sm_api_input: "A computer is a device that can be instructed to carry out an arbitrary set of arithmetic or logical operations automatically. The ability of computers to follow a sequence of operations, called a program, make computers very applicable to a wide range of tasks. Such computers are used as control systems for a very wide variety of industrial and consumer devices. This includes simple special purpose devices like microwave ovens and remote controls, factory devices such as industrial robots and computer assisted design, but also in general purpose devices like personal computers and mobile devices such as smartphones. The Internet is run on computers and it connects millions of other computers."
  //  }
  // }).then(res => console.log(res));

  // fetch('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => console.log("smmry", res.sm_api_content));

};

export const fetchNotes = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .on('value', snapshot => {
      dispatch(receiveNotes(snapshot.val()));
    });
};

export const receiveNotes = allNotes => ({
  type: RECEIVE_NOTES,
  allNotes
});
