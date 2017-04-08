import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ArticlesReducer from './ArticlesReducer';
import AudioReducer from './AudioReducer';
import ExcludesReducer from './ExcludesReducer';

export default combineReducers({
  auth: AuthReducer,
  articles: ArticlesReducer,
  excludes: ExcludesReducer,
  audio: AudioReducer
});
