import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         LOGOUT_USER} from './types';
import { updateExcludes } from '../actions';

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

const removeUser = () => {
  return {
    type: LOGOUT_USER
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
        .catch((err) => loginUserFail(dispatch, err));
  };
};

export const signupUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
        .catch((err) => loginUserFail(dispatch, err))
        .then(() => dispatch(updateExcludes({
          sports: true,
          business: true,
          tech: true,
          entertainment: true,
          politics: true
        })))
        .catch((err) => loginUserFail(dispatch, err))
  };
};

export const logoutUser = () => dispatch => {
    firebase.auth().signOut()
      .then(() => {
        dispatch(removeUser())
        Actions.auth()
      })
}

const loginUserFail = (dispatch, err) => (
  dispatch({type: LOGIN_USER_FAIL, err})
);

export const clearErrors = err => dispatch => {
  dispatch({type: LOGIN_USER_FAIL, err})
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user
  });
  Actions.main();
};
