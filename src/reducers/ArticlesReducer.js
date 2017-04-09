import { RECEIVE_ARTICLES, RECEIVE_CURRENT_ARTICLE } from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_ARTICLES:
      return action.allArticles;
    default:
      return state;
  }
};
