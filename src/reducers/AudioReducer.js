import { PLAY_ARTICLE } from './types';

const INITIAL_STATE = {
  currentArticle: 0,
  speaking: 'stopped'
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PLAY_ARTICLE:
      return {currentArticle: action.article, speaking: 'playing'};
    default:
      return state;
  }
};
