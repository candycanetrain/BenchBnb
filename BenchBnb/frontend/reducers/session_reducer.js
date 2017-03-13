import { merge } from 'lodash';

import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = ( state = _nullUser, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    default:
      return state;
  }
};



export default SessionReducer;
