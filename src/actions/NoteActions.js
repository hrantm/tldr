import { RAW_TEXT_CHANGED, CREATE_NOTE, RECEIVE_NOTES } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const rawTextChanged = (rawText) => {
  return {
    type: RAW_TEXT_CHANGED,
    rawText
  };
};

export const createNote = (rawText) => {
  console.log('rawtext', rawText);
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .push({ rawText })
    .then(() => {
      dispatch({type: CREATE_NOTE});
      Actions.notesIndex();
    });
  };
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
