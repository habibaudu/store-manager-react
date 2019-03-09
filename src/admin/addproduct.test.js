import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import {
  AddProductComponent,
  AddProductContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './AddProductComponent';

jest.mock('axios');

const props = {
  addProduct: jest.fn(),
  errormessage: '',
  status: '',
};

describe('ADD PRODUCT TEST SUITE', () => {
  describe('Admin Component', () => {
    it('should render the AddProduct Component', () => {
      const component = shallow(<AddProductComponent {...props} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
    it('should render the AddProduct container', () => {
      const component = shallow(<AddProductContainer />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });

  it('should ensures mapDispatchToProps dispatches the specified actions', () => {
    const mock = configureStore([thunk]);
    const store = mock({});
    const component = shallow(
      <Provider store={store}>
        <AddProductContainer />
      </Provider>,
    );
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addProduct();
  });

  it('it should  submit Add product form', () => {
    const addProduct = jest.fn();
    const props = {
      addProduct,
      status: '',
      errormessage: '',
    };
    const component = shallow(<AddProductComponent {...props} />);
    component.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          productname: { value: 'all stars' },
          quantity: { value: 1 },
          minimum: { value: 3 },
          description: { value: 'a good product' },
          price: { value: 230 },
        },
      },
    });
    expect(addProduct).toHaveBeenCalled();
  });
});
