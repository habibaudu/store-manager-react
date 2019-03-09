import types from './types';

const setAllProducts = products => ({
  type: types.LOAD_ALL_PRODUCT,
  payload: products,
});

const addProducts = productadded => ({
  type: types.ADD_PRODUCT,
  productadded,
});

const addProductStatus = status => ({
  type: types.SET_ADD_STATE,
  status,
});

const addProductError = errormessage => ({
  type: types.SET_ADD_ERROR,
  errormessage,
});

const setDeleteProduct = deleteProduct => ({
  type: types.DELETE_PRODUCT,
  deleteProduct,
});

const setSignupState = signupState => ({
  type: types.SET_SIGNUP_STATE,
  signupState,
});
const setSignupError = errorMessage => ({
  type: types.SET_SIGNUP_ERROR,
  errorMessage,
});

export default {
  setAllProducts,
  addProducts,
  addProductStatus,
  addProductError,
  setDeleteProduct,
  setSignupState,
  setSignupError,
};
