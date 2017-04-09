import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ArticlesReducer from './ArticlesReducer';
import CurrentArticleReducer from './CurrentArticleReducer';
import AudioReducer from './AudioReducer';
import ExcludesReducer from './ExcludesReducer';

export default combineReducers({
  auth: AuthReducer,
  articles: ArticlesReducer,
  currentArticle: CurrentArticleReducer,
  excludes: ExcludesReducer,
  audio: AudioReducer
});
