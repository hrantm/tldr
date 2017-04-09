import { RECEIVE_CURRENT_ARTICLE } from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log('current article reducer being called with', action);
  switch(action.type) {
    case RECEIVE_CURRENT_ARTICLE:
    console.log('current article in reducer', action.currentArticle);
      return action.currentArticle.currentArticle;
    default:
      return state;
  }
};
