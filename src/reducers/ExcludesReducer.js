import { RECEIVE_EXCLUDES } from '../actions/types';

const INITIAL_STATE = {
  sports: true,
  business: true,
  tech: true,
  entertainment: true,
  politics: true
 };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_EXCLUDES:
      return { ...state, ...action.allExcludes};
    default:
      return state;
  }
};
