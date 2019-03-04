import { connect } from 'react-redux';
import { doLogin } from './duck';
import { LoginComponent as component } from './LoginComponent';


const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer.loginState,
    errorMessage: state.loginReducer.errorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) =>
      dispatch(doLogin(email, password)),
  };
};
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export { LoginContainer, mapDispatchToProps, mapStateToProps };
