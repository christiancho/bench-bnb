import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../actions/session_actions';

const mapStateToProps = ( state ) => {
  return {
    loggedIn: state.session.loggedIn,
    errors: state.session.errors
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  const buttonText = ( ownProps.location.pathname === "/signup" ) ? "Sign Up" : "Login";
  const processFunc = ( buttonText === "Sign Up" ) ? signup : login;
  return {
    formType: buttonText,
    processForm: user => dispatch(processFunc(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
