import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import AdminComponent from './AdminComponent';
import { AdminContainer, mapDispatchToProps } from './AdminContainer';
import {
  actions,
  types,
  constants,
  adminReducer,
  deleteProduct,
  fetchAllProducts,
  addProduct,
} from './duck';

jest.mock('axios');

const { setAllProducts, addProductStatus } = actions;
const props = {
  fetchAllProducts: jest.fn(),
  deleteProduct: jest.fn(),
};

describe('ADMIN TEST SUITE', () => {
  describe('Admin Component', () => {
    it('should render the Admin Page', () => {
      const component = shallow(<AdminComponent {...props} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
    it('it should submit the form ', () => {
      const props = {
        deleteProduct,
        fetchAllProducts,
        payload: [
          {
            productname: 'shoe lace',
            quantity: 3,
            minimum: 4,
            description: 'a good product',
            price: 230,
          },
          {
            productname: 'shoe lace2',
            quantity: 33,
            minimum: 4,
            description: 'a good product',
            price: 230,
          },
        ],
      };
      const payload = [
        {
          productname: 'shoe lace',
          quantity: 3,
          minimum: 4,
          description: 'a good product',
          price: 230,
        },
        {
          productname: 'shoe lace2',
          quantity: 33,
          minimum: 4,
          description: 'a good product',
          price: 230,
        },
      ];
      const component = shallow(<AdminComponent {...props} />);
    });

    it('should render the Admin container', () => {
      const component = shallow(<AdminContainer />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });

  it('should ensures mapDispatchToProps dispatches the specified actions', () => {
    const mock = configureStore([thunk]);
    const store = mock(props);
    const component = shallow(
      <Provider store={store}>
        <AdminContainer />
      </Provider>,
    );
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).fetchAllProducts();
    mapDispatchToProps(dispatch).deleteProduct();
  });
});

describe('TEST FOR GET PRODUCT', () => {
  const payload = {
    data: {
      productname: 'productname',
      id: 1,
      quantity: 1,
      minimum: 2,
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const response = { message: 'fetchall product' };
  axios.get.mockImplementation(() => Promise.resolve(response));
  store.dispatch(fetchAllProducts()).then(() => {
    store.dispatch(setAllProducts(payload));
  });
});

describe('TEST FOR DELETE PRODUCT', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const response = { message: 'delete product' };
  axios.delete.mockResolvedValue(response);
  store.dispatch(deleteProduct()).then(() => {});
});

describe('TEST FOR ADD PRODUCT', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const response = { message: 'add product' };

  axios.post.mockImplementation(() => Promise.resolve(response));

  store.dispatch(addProduct()).then(() => {
    store.dispatch(addProductStatus(constants.PRODUCT_SUCESSFULLY_ADDED));
  });

  it('Should test for product add: failure', () => {
    const product = {};
    const store = mockStore({});
    const response = { data: 'product add not sucessfull' };
    axios.patch.mockImplementation(() => Promise.reject(response));

    store.dispatch(addProduct(product)).catch(() => {
      store.dispatch(addProductStatus(constants.ADD_ERROR));
    });
  });
});
