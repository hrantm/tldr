import { PLAY_ARTICLE } from '../actions/types';

const INITIAL_STATE = false

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PLAY_ARTICLE:
      return !state;
    default:
      return state;
  }
};
