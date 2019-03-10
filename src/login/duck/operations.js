import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const API_URL = process.env.API_URL;
const { setLoginState, setLoginError } = actions;
const url = `${API_URL}auth/login`;

const doLogin = (email, password) => dispatch => {
  dispatch(setLoginState(constants.LOGGING_IN));
  dispatch(setLoginError(''));
  return axios
    .post('https://store-manager2.herokuapp.com/api/v1/auth/login', {
      email,
      password,
    })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(setLoginState(constants.LOGIN_SUCCESS, data));
    })
    .catch(({ response }) => {
      dispatch(setLoginState(constants.LOGIN_ERROR));
      dispatch(setLoginError(response));
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export default doLogin;
