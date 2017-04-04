import { RAW_TEXT_CHANGED, CREATE_NOTE } from '../actions/types';
const INITIAL_STATE = {
  rawText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_NOTE:
      return INITIAL_STATE;
    case RAW_TEXT_CHANGED:
      return { ...state, rawText: action.rawText };
    default:
      return state;
  }
};
