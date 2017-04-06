import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
  auth: AuthReducer,
  articles: ArticlesReducer
});
