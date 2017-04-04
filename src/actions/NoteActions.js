import { RAW_TEXT_CHANGED, CREATE_NOTE, RECEIVE_NOTES } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

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
  console.log(rawText);
  //use figaro to hide api key


  axios.post('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer')
       .then(res => console.log(res));

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
