import { connect } from 'react-redux';
import { fetchAllProducts } from './duck';
import AdminComponent  from './AdminComponent';



const mapStateToProps = (state) => {
  return {
          payload :state.adminReducer.payload,
          
        }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () =>
      dispatch(fetchAllProducts()),
  };
};
const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminComponent);

export { AdminContainer, mapDispatchToProps, mapStateToProps };
