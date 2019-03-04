import types from './types';


const setAllProducts = (products) => ({
    type:types.LOAD_ALL_PRODUCT,
    payload: products
  
});

export default { setAllProducts };
