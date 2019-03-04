import types from './types';


const setAllProducts = (products) => ({
    type:types.LOAD_ALL_PRODUCT,
    payload: products
  
});
const getAProducts = (product) => ({
  type:types.GET_A_PRODUCT,
  product

});



export default { setAllProducts, getAProducts };
