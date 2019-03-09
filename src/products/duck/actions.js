import types from './types';


const setAllProducts = (products) => ({
    type:types.LOAD_ALL_PRODUCT,
    payload: products
  
});
const getAProducts = (product) => ({
  type:types.GET_A_PRODUCT,
  product

});

const addToCart = (item) => ({
  type:types.ADD_TO_CART,
  item

});

const removeFromCart = (item) => ({
  type:types.REMOVE_FROM_CART,
  item

});



export default { setAllProducts, getAProducts, addToCart, removeFromCart };
