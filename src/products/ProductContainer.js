import { connect } from 'react-redux';
import { fetchAllProducts, searchProduct } from './duck';
import ProductComponent  from './ProductComponent';


const mapStateToProps = (state) => {
  return {
          payload :state.productReducer.payload,
          product: state.productReducer.product,
          cart : state.cartReducer,
        }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () =>
      dispatch(fetchAllProducts()),
    searchProduct: (product) =>
      dispatch(searchProduct(product)),
    addToCart: (item) =>{
       dispatch({type: 'ADD_TO_CART', payload:item })
     },
     removeFromCart:(item) => {
       dispatch({ type: 'REMOVE_FROM_CART',payload: item })
     }
  };
};
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductComponent);

export { ProductContainer, mapDispatchToProps, mapStateToProps };
