import { connect } from 'react-redux';
import { fetchAllProducts } from './duck';
import ProductComponent  from './ProductComponent';


const mapStateToProps = (state) => {
  return {payload :state.productReducer.payload}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () =>
      dispatch(fetchAllProducts()),
  };
};
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductComponent);

export { ProductContainer, mapDispatchToProps, mapStateToProps };
