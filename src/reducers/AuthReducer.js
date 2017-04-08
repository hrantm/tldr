import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         LOGOUT_USER} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.text };
    case PASSWORD_CHANGED:
      return { ...state, password: action.text };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.user };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.err.message, password: '', loading: false };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
