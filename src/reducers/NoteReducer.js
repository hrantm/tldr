import { RAW_TEXT_CHANGED } from '../actions/types';
const INITIAL_STATE = {
  rawText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RAW_TEXT_CHANGED:
      return { ...state, rawText: action.rawText };
    default:
      return state;
  }
};
