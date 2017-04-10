import { RECEIVE_EXCLUDES } from '../actions/types';

const INITIAL_STATE = {
  sports: false,
  business: false,
  tech: false,
  entertainment: false,
  politics: false
 };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_EXCLUDES:
      return action.allExcludes;
    default:
      return state;
  }
};
