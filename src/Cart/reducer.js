import types from './types'
const cartWithOutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
   const cartItem = itemInCart(cart, item)
    const result = cartItem === undefined ? [...cartWithOutItem(cart,item), {...item, quantityInCart:1}]
    : [...cartWithOutItem(cart,item), {...cartItem, quantityInCart: cartItem.quantityInCart + 1}]
   return result
}

const removeFromCart =(cart, item) =>{
  return item.quantityInCart === 1
     ? [...cartWithOutItem(cart,item)]
     : [...cartWithOutItem(cart,item), {...item,quantityInCart: item.quantityInCart - 1}]

}

const cartReducer = (state={ data: []}, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
       return {
         ...state,
         data: addToCart(state.data, action.payload)
       }

    case 'REMOVE_FROM_CART':
    return {
      ...state,
      data: removeFromCart(state.data, action.payload)
     }
    case types.MAKE_SALES: {
      const { salesState } = action;
      return {
        ...state,
        salesState,
      };
    }
    case types.MAKE_SALES_ERROR: {
      const { salesError } = action;
      return {
        ...state,
        salesError,
      };
    }

    default:
      return state;
  }
}

export default cartReducer;