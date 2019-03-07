import types from './types';

const recordReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_RECORD:{
      const { records} = action
      return { ...state,
        records };
      }
        
    default:
      return state;
  }
}

export default recordReducer;
