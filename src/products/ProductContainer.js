import { connect } from 'react-redux';
import { fetchAllProducts, searchProduct } from './duck';
import ProductComponent  from './ProductComponent';


const mapStateToProps = (state) => {
  return {
          payload :state.productReducer.payload,
          product: state.productReducer.product
        }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () =>
      dispatch(fetchAllProducts()),
    searchProduct: (product) =>
      dispatch(searchProduct(product)),
  };
};
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductComponent);

export { ProductContainer, mapDispatchToProps, mapStateToProps };
