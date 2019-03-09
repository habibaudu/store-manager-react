import types from './types';

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_PRODUCT:{
      const { payload} = action
      return { ...state,
              payload };
      }
      case types.GET_A_PRODUCT:{
        const { product } = action
        return { ...state,
                product };
        }
        
    default:
      return state;
  }
}

export default productReducer;
