import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import configureStore from 'redux-mock-store';
import { Redirect, MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { LoginComponent as Login } from './LoginComponent';
import { actions, constants, loginReducer, types, doLogin } from './duck';
import {
  LoginContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './LoginContainer';
jest.mock('jwt-decode');
jest.mock('axios');

const { setLoginState, setLoginError } = actions;

describe('Login Component', () => {
  it('should render without throwing an error', () => {
    const result = {
      userRole: 'ADMIN',
    };
    jwtDecode.mockImplementation(() => result);
    const loginUser = jest.fn();
    const props = {
      loginUser,
      loginState: '',
      errorMessage: 'Invalid credentials',
      history: {},
    };
    const wrapper = shallow(<Login {...props} />);
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          email: {
            value: 'hello',
          },
          password: {
            value: 'pass',
          },
        },
      },
      preventDefault: () => {},
    });
    expect(loginUser).toHaveBeenCalledWith('hello', 'pass');
  });

  it('should render an email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1);
  });

  it('should render a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1);
  });

  it('should redirect page if login is successful', () => {
    const props = {
      loginUser: () => {},
      loginState: 'LOGIN_SUCCESS',
      errorMessage: '',
    };
    const component = shallow(<Login {...props} />);
    expect(component.containsMatchingElement(<Redirect to="/admin" />)).toEqual(
      false,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Login Action', () => {
  it('it should set login state', () => {
    const action = setLoginState(constants.LOGGING_IN);
    expect(action).toEqual({
      type: types.SET_LOGIN_STATE,
      loginState: constants.LOGGING_IN,
    });
  });

  it('it should set login error message', () => {
    const action = setLoginError(constants.LOGIN_ERROR);
    expect(action).toEqual({
      type: types.SET_LOGIN_ERROR,
      errorMessage: constants.LOGIN_ERROR,
    });
  });

  it('should setup default state values', () => {
    const state = loginReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      loginState: '',
      errorMessage: '',
    });
  });
});

describe('Login Container', () => {
  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loginUser();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('Login Reducers', () => {
  it('should setup default state values', () => {
    const state = loginReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      loginState: '',
      errorMessage: '',
    });
  });

  it('it should change the login state', () => {
    const action = {
      type: types.SET_LOGIN_STATE,
      loginState: constants.LOGGING_IN,
    };
    const state = loginReducer(undefined, action);
    expect(state.loginState).toEqual(constants.LOGGING_IN);
  });

  it('it should change the login error message', () => {
    const action = {
      type: types.SET_LOGIN_ERROR,
      errorMessage: 'invalid credentials',
    };
    const state = loginReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
});

describe('Connected Login Component Dispatches Login Success', () => {
  const initialState = {
    login: {
      loginState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    const response = {};
    axios.post.mockImplementation(() => Promise.resolve(response));
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer />
        </MemoryRouter>
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          email: { value: 'spicy' },
          password: { value: 'dicy' },
        },
      },
    });
  });
});

describe('it should  Dispatches Login success', () => {
  const initialState = {
    login: {
      loginState: constants.LOGIN_SUCCESS,
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const target = {
    elements: {
      email: { value: 'spicy' },
      password: { value: 'dicy' },
    },
  };
  const response = { message: 'Login sucessful' };
  axios.post.mockImplementation(() => Promise.resolve(response));

  store.dispatch(doLogin(target)).then(() => {
    store.dispatch(setLoginState(initialState));
  });
});
