import firebase from 'firebase';
import {
  RECEIVE_EXCLUDES
 } from './types';

export const fetchExcludes = () => dispatch => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`users/${currentUser.uid}/excluded`)
    .on('value', snapshot => {
      dispatch(receiveExcludes(snapshot.val()))
    })
}

export const updateExcludes = excludes => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`users/${currentUser.uid}`).child('excluded').set(excludes)
    .then(() => dispatch(receiveExcludes(excludes)))
}

export const receiveExcludes = (allExcludes) => ({
  type: RECEIVE_EXCLUDES,
  allExcludes
});
