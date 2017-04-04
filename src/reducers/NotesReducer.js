import { RECEIVE_NOTES } from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.allNotes;
    default:
      return state;
  }
};
