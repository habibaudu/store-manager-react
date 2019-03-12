import types from './types';

const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_PRODUCT: {
      const { payload } = action;
      return { ...state, payload };
    }
    case types.ADD_PRODUCT: {
      const { productadded } = action;
      return { ...state, productadded };
    }
    case types.SET_ADD_STATE: {
      const { status } = action;
      return { ...state, status };
    }
    case types.SET_ADD_ERROR: {
      const { errormessage } = action;
      return { ...state, errormessage };
    }
    case types.DELETE_PRODUCT: {
      const { id } = action;
      const newPayload = state.payload.filter(product => product.id !== id);
      return { ...state, payload: newPayload };
    }
    case types.SET_SIGNUP_STATE: {
      const { signupState, data } = action;
      return {
        ...state,
        signupState,
        data,
      };
    }
    case types.SET_SIGNUP_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
