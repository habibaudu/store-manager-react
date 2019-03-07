import { connect } from 'react-redux';
import { fetchMyRecords} from './duck';
import RecordComponent  from './RecordComponent';


const mapStateToProps = (state) => {
  return {
          record :state.recordReducer,

        }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMyRecords: () =>
      dispatch(fetchMyRecords()),
  };
};
const RecordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordComponent);

export { RecordContainer, mapDispatchToProps, mapStateToProps };
