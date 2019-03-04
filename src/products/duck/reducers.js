import types from './types';

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_PRODUCT:{
      const { payload} = action
      return { ...state,
              payload };
      }
    default:
      return state;
  }
}

export default productReducer;
