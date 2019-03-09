import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const API_URL = process.env.API_URL;
const {  setAllRecords } = actions;
const url = `${API_URL}sale`;

const fetchMyRecords = () => dispatch => {
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  return axios
    .get(url,defaultOptions)
    .then(({ data }) => {
      dispatch(setAllRecords(data))
    })
    .catch(({ response }) => {
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export {fetchMyRecords};
