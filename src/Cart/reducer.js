
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

const cartReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TO_CART':
       return  addToCart(state, action.payload)

    case 'REMOVE_FROM_CART':
    return removeFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer;