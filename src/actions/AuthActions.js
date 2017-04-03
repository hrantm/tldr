import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    text
  };
};

export const loginUser = (email, password) => {
  console.log('email password', email, password);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
        .catch((err) => loginUserFail(dispatch, err));
  };
};

export const signupUser = (email, password) => {
  console.log('email password', email, password);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
        .catch((err) => loginUserFail(dispatch, err));
  };
};

const loginUserFail = (dispatch, err) => (
  dispatch({type: LOGIN_USER_FAIL, err})
);

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user
  });
  Actions.main ();
};
