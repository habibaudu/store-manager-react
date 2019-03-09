import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import {
  CreateAttendantContainer,
  CreateAttendantComponent,
  mapDispatchToProps,
} from './CreateAttendantComponent';
import {
  actions,
  types,
  constants,
  adminReducer,
  createAttendant,
} from './duck';

jest.mock('axios');

const { setSignupState, setSignupError } = actions;

describe('SIGNUP TEST SUITE', () => {
  describe('Signup Component', () => {
    it('should render the Signup Page', () => {
      const component = shallow(<CreateAttendantComponent />);
      expect(component).toMatchSnapshot();
    });

    it('it should not submit the form ', () => {
      const signupUser = jest.fn();
      const signUserOut = jest.fn();
      const props = {
        signupUser,
        signupState: '',
        errorMessage: 'message error',
        signUserOut,
      };
      const component = shallow(<CreateAttendantComponent {...props} />);
      component.find('form').simulate('submit', {
        preventDefault: () => {},
        target: {
          elements: {
            username: { value: 'johndoe' },
            email: { value: 'johndoe@joe.com' },
            password: { value: 'johndoe88' },
            password2: { value: 'johndoe88' },
            role: { value: 'johndoe88' },
          },
        },
      });
      expect(signupUser).toHaveBeenCalled();
    });
  });
});

describe(' Signup Component Dispatches Signup action', () => {
  const initialState = {
    signup: {
      signupUser: jest.fn(),
      signupState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  const response = { data: { articles: {} } };
  axios.post.mockImplementation(() => Promise.resolve(response));
  wrapper = shallow(
    <Provider store={store}>
      <CreateAttendantContainer />
    </Provider>,
  );

  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).signupUser();
});

describe('signup Component Dispatches signup action after resoling', () => {
  const signupUser = jest.fn();
  const initialState = {
    login: {
      signUpState: constants.SIGNUP_SUCCESS,
      errorMessage: '',
      signupUser,
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const target = {
    elements: {
      email: { value: 'spicy' },
      password: { value: 'dicy' },
      username: { value: 'spicy' },
      password2: { value: 'dicy' },
      role: { value: 'spicy' },
    },
  };
  const response = { message: 'signUp sucessful' };
  axios.get.mockImplementation(() => Promise.resolve(response));

  store.dispatch(createAttendant(target)).then(() => {
    store.dispatch(setSignupState(initialState));
  });
});

describe('Signup Actions', () => {
  it('it should set the signup state', () => {
    const action = setSignupState(constants.SIGNING_UP);
    expect(action).toEqual({
      type: types.SET_SIGNUP_STATE,
      signupState: constants.SIGNING_UP,
    });
  });

  it('it should set the signup error message', () => {
    const action = setSignupError(constants.SIGNUP_ERROR);
    expect(action).toEqual({
      type: types.SET_SIGNUP_ERROR,
      errorMessage: constants.SIGNUP_ERROR,
    });
  });
});

describe('Signup Reducers', () => {
  it('should setup default state values', () => {
    const state = adminReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({});
  });

  it('it should change the signup state', () => {
    const action = {
      type: types.SET_SIGNUP_STATE,
      signupState: constants.SIGNING_UP,
    };
    const state = adminReducer(undefined, action);
    expect(state.signupState).toEqual(constants.SIGNING_UP);
  });

  it('it should change the signup error message', () => {
    const action = {
      type: types.SET_SIGNUP_ERROR,
      errorMessage: 'invalid username',
    };
    const state = adminReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
  it('it should change the delete product message', () => {
    const action = {
      type: types.DELETE_PRODUCT,
      deleteProduct: 'product deleted',
    };
    const state = adminReducer(undefined, action);
    expect(state.deleteProduct).toEqual(action.deleteProduct);
  });

  it('it should change the add product message', () => {
    const action = {
      type: types.SET_ADD_STATE,
      status: 'product added',
    };
    const state = adminReducer(undefined, action);
    expect(state.status).toEqual(action.status);
  });

  it('it should change the add product error message', () => {
    const action = {
      type: types.SET_ADD_ERROR,
      errormessage: 'product was not added',
    };
    const state = adminReducer(undefined, action);
    expect(state.errormessage).toEqual(action.errormessage);
  });

  it('it should change the add product message', () => {
    const action = {
      type: types.ADD_PRODUCT,
      productadded: 'product was added',
    };
    const state = adminReducer(undefined, action);
    expect(state.productadded).toEqual(action.productadded);
  });

  it('it should change the add product message', () => {
    const action = {
      type: types.LOAD_ALL_PRODUCT,
      payload: 'products',
    };
    const state = adminReducer(undefined, action);
    expect(state.payload).toEqual(action.payload);
  });
});
