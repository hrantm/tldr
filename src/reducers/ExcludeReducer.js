import { RECEIVE_EXCLUDES } from '../actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_EXCLUDES:
      return { };
    default:
      return state;
  }
};
