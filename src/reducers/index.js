import { combineReducers } from 'redux';

const  loginReducer = (state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case 'IS_LOGGED_IN':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case 'IS_ERROR':
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}


export default combineReducers({
  loginReducer
  
});

