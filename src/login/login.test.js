import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { Redirect, MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { LoginComponent as Login } from './LoginComponent';
import { actions, constants, loginReducer, types } from './duck';
import { EllipsisLoaderComponent } from '../loaders';
import {
  LoginContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './LoginContainer';

jest.mock('axios');

const { setLoginState, setLoginError } = actions;

describe('Login Component', () => {
  it('should render without throwing an error', () => {
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
});
