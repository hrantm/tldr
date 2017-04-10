import { RECEIVE_CURRENT_ARTICLE } from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_ARTICLE:
      return action.currentArticle.currentArticle;
    default:
      return state;
  }
};
