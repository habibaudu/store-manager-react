import { connect } from 'react-redux';
import { fetchAllProducts, deleteProduct } from './duck';
import AdminComponent  from './AdminComponent';



const mapStateToProps = (state) => {
  return {
          payload :state.adminReducer.payload,
          delete: state.adminReducer.delete,
          
        }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () =>
      dispatch(fetchAllProducts()),
      deleteProduct:(id) =>
      dispatch(deleteProduct(id)), 
  };
};
const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminComponent);

export { AdminContainer, mapDispatchToProps, mapStateToProps };
