import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const API_URL = process.env.API_URL;
const {
  setAllProducts,
  addProducts,
  addProductStatus,
  addProductError,
  setDeleteProduct,
  setSignupError,
  setSignupState,
} = actions;

const url = `${API_URL}products`;

const fetchAllProducts = () => dispatch => {
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  return axios
    .get('https://store-manager2.herokuapp.com/api/v1/products', defaultOptions)
    .then(({ data }) => {
      const img = data.imgArr;
      const data2 = data.rows;
      let count = 0;
      const products = [];
      data2.forEach(product => {
        const {
          id,
          productname,
          price,
          quantity,
          minimum,
          description,
          modified_date,
          created_date,
        } = product;

        products.push({
          item: img[count],
          id,
          productname,
          price,
          quantity,
          minimum,
          description,
          modified_date,
          created_date,
        });

        count += 1;
      });
      dispatch(setAllProducts(products));
    })
    .catch(({ response }) => {
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export const addProduct = (
  productname,
  price,
  minimum,
  quantity,
  images,
  description,
) => dispatch => {
  dispatch(addProductStatus(constants.ADDING_PRODUCT));
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };

  return axios
    .post(
      'https://store-manager2.herokuapp.com/api/v1/products',
      { productname, minimum, description, images, price, quantity },
      defaultOptions,
    )
    .then(({ data }) => {
      dispatch(addProductStatus(constants.PRODUCT_SUCESSFULLY_ADDED));
      dispatch(addProducts(data));
    })
    .catch(({ response }) => {
      toast.error(response, {
        hideProgressBar: true,
      });
      dispatch(addProductError(constants.ADD_ERROR));
    });
};

export const deleteProduct = id => dispatch => {
  const deleteUrl = `https://store-manager2.herokuapp.com/api/v1/products/${id}`;
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };

  return axios
    .delete(deleteUrl, defaultOptions)
    .then(({ data }) => {
      dispatch(setDeleteProduct(data));
    })
    .catch(({ response }) => {
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export const createAttendant = (
  email,
  password,
  username,
  Role,
) => dispatch => {
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  dispatch(setSignupState(constants.SIGNING_UP));
  dispatch(setSignupError(''));
  return axios
    .post(
      `https://store-manager2.herokuapp.com/api/v1/auth/signup`,
      {
        email,
        password,
        username,
        Role,
      },
      defaultOptions,
    )
    .then(({ data }) => {
      dispatch(setSignupState(constants.SIGNUP_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setSignupState(constants.SIGNUP_ERROR));
      dispatch(setSignupError(response));
      toast.error(response, {
        hideProgressBar: true,
      });
    });
};

export { fetchAllProducts };
