import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { ProductContainer, mapDispatchToProps } from './ProductContainer';
import {
  actions,
  types,
  constants,
  productReducer,
  fetchAllProducts,
  searchProduct,
} from './duck';

jest.mock('axios');

const { setAllProducts, getAProducts, addToCart, removeFromCart } = actions;
const props = {
  fetchAllProducts: jest.fn(),
  searchProduct: jest.fn(),
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),

  cart: {
    data: [
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
  },
};

describe('PRODUCT TEST SUITE', () => {
  describe('Product Component', () => {
    it('should render the PRODUCT Page', () => {
      const component = shallow(<ProductComponent {...props} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
    it('it iterate through product', () => {
      const props = {
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

        cart: {
          data: [
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
        },
      };

      const component = shallow(<ProductComponent {...props} />);
    });

    it('should render the product container', () => {
      const component = shallow(<ProductContainer />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });

  it('should ensures mapDispatchToProps dispatches the specified actions', () => {
    const mock = configureStore([thunk]);
    const store = mock(props);
    const component = shallow(
      <Provider store={store}>
        <ProductContainer />
      </Provider>,
    );
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).fetchAllProducts();
    mapDispatchToProps(dispatch).searchProduct();
    mapDispatchToProps(dispatch).addToCart();
    mapDispatchToProps(dispatch).removeFromCart();
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
  axios.get.mockResolvedValue(response);
  store.dispatch(fetchAllProducts()).then(() => {
    store.dispatch(setAllProducts(payload));
  });
});

describe('TEST FOR SEARCH PRODUCT', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;
  const response = { message: 'delete product' };
  axios.get.mockResolvedValue(response);
  store.dispatch(searchProduct()).then(() => {});
});

describe('Products Reducers', () => {
  it('should setup default state values', () => {
    const state = productReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({});
  });

  it('it should change product payload', () => {
    const action = {
      type: types.LOAD_ALL_PRODUCT,
      payload: 'products',
    };
    const state = productReducer(undefined, action);
    expect(state.payload).toEqual(action.payload);
  });

  it('it should change get a product payload', () => {
    const action = {
      type: types.GET_A_PRODUCT,
      product: 'snickers',
    };
    const state = productReducer(undefined, action);
    expect(state.product).toEqual(action.product);
  });
});

describe('Product Actions', () => {
  it('it should set the all product state', () => {
    const action = setAllProducts('products');
    expect(action).toEqual({
      type: types.LOAD_ALL_PRODUCT,
      payload: 'products',
    });
  });

  it('it should set the get a Product state', () => {
    const action = getAProducts('timberland');
    expect(action).toEqual({
      type: types.GET_A_PRODUCT,
      product: 'timberland',
    });
  });

  it('it should set the set remove from cart state', () => {
    const action = removeFromCart('timberland');
    expect(action).toEqual({
      type: types.REMOVE_FROM_CART,
      item: 'timberland',
    });
  });

  it('it should set item to be added to cart', () => {
    const action = addToCart('timberland');
    expect(action).toEqual({
      type: types.ADD_TO_CART,
      item: 'timberland',
    });
  });
});
