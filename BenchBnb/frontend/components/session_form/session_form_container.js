import { connect } from 'react-redux';
import {SessionForm} from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.currentUser ? true : false,
  errors: state.errors,
  formType: ownProps.location.pathname === 'login' ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
