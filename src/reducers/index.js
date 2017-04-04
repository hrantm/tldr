import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecordReducer from './RecordReducer';
import NotesReducer from './NotesReducer';

export default combineReducers({
  auth: AuthReducer,
  record: RecordReducer,
  notes: NotesReducer
});
