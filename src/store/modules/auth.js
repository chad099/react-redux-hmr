
import { push } from 'react-router-redux';
// import { roles } from '../../../config/default';

const LOAD = 'auth/LOAD';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';

const RESET_ERRORS = 'auth/RESET_ERRORS';

const initialState = {
  loading: false,
  loggingIn: false,
  loggingOut: false,
  user: null,
  error: null,
  logoutError: null,
  loginError: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return { ...state, loading: false, user: action.result };
    case LOAD_FAIL:
      return { ...state, loading: false, error: action.error };

    case LOGIN:
      return { ...state, loggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false, user: action.result };
    case LOGIN_FAIL:
      return { ...state, loggingIn: false, user: null, loginError: action.error };

    case LOGOUT:
      return { ...state, loggingOut: true };
    case LOGOUT_SUCCESS:
      return { ...state, loggingOut: false, user: null };
    case LOGOUT_FAIL:
      return { ...state, loggingOut: false, logoutError: action.error };

    case RESET_ERRORS:
      return { ...state, error: null, loginError: null, logoutError: null };

    default:
      return state;
  }
}
