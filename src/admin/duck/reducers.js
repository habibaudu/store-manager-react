import types from './types';

const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_PRODUCT:{
      const { payload} = action
      return { ...state,
              payload };
      }
      case types.ADD_PRODUCT:{
        const { productadded } = action
        return { ...state,
          productadded };
        }
      case types.SET_ADD_STATE:{
          const { status } = action
          return { ...state,
            status };
          }
      case types.SET_ADD_ERROR:{
            const { errormessage } = action
            return { ...state,
              errormessage };
            }
    default:
      return state;
  }
}

export default adminReducer;
