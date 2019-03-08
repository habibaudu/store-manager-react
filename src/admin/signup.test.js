import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { CreateAttendantContainer } from './CreateAttendantComponent';
import { actions, types, constants, adminReducer } from './duck';

jest.mock('axios');

const { setSignupState, setSignupError } = actions;

describe('SIGNUP TEST SUITE', () => {
  describe('Signup Component', () => {
    it('should render the Signup Page', () => {
      const component = shallow(<CreateAttendantContainer />);
      expect(component).toMatchSnapshot();
    });

    it('it should not submit the form if any input field is empty', () => {
      const signupUser = jest.fn();
      const props = {
        signupUser,
        signupState: '',
        errorMessage: 'Email password username',
      };
      const component = shallow(<CreateAttendantContainer {...props} />);
      component.find('form').simulate('submit', {
        preventDefault: () => {},
        target: {
          elements: {
            username: { value: 'johndoe' },
            email: { value: 'johndoe@joe.com' },
            password: { value: 'johndoe88' },
          },
        },
      });
      expect(signupUser).not.toHaveBeenCalled();
    });
  });
});
