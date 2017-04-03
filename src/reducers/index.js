import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteReducer from './NoteReducer';

export default combineReducers({
  auth: AuthReducer,
  notes: NoteReducer
});
