import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const API_URL = process.env.API_URL;
const { setSalesRecord, setSalesError } = actions;
const url = `${API_URL}sales`;

const createSalesRecord = makesales => dispatch => {
  dispatch(setSalesRecord(constants.MAKING_SALES));
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  return axios
    .post(
      'https://store-manager2.herokuapp.com/api/v1/sales',
      makesales,
      defaultOptions,
    )
    .then(({ data }) => {
      dispatch(setSalesRecord(constants.SALES_SUCESS));
    })
    .catch(({ response }) => {
      dispatch(setSalesError(constants.SALES_ERROR));
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export { createSalesRecord };
