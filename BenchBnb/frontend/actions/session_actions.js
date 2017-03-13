import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveErrors = errors => dispatch => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCurrentUser = user => dispatch => ({
  type: RECEIVE_CURRENT_USER,
  user
});