import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  CartComponent,
  CartContainer,
  mapDispatchToProps,
} from './CartComponent';
import cartReducer from './reducer';
import types from './types';
import constants from './constants';
import actions from './actions';
import { createSalesRecord } from './operations';

jest.mock('axios');

const { setSalesRecord, setSalesError } = actions;
const props = {
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  salesRecord: jest.fn(),

  cart: {
    data: [
      {
        id: 2,
        attendants_id: 3,
        productname: 'shoe',
        price: 2345,
        quantity: 34,
      },
      {
        id: 22,
        attendants_id: 4,
        productname: 'shoe',
        price: 2000,
        quantity: 34,
      },
    ],
  },
};

describe('SALES ATTENDANT RECORD TEST SUITE', () => {
  describe('Record Component', () => {
    it('should render the cart Page', () => {
      const component = shallow(<CartComponent {...props} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });

    it('should render the Cart container', () => {
      const component = shallow(<CartContainer />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });

  it('should ensures mapDispatchToProps dispatches the specified actions', () => {
    const mock = configureStore([thunk]);
    const store = mock(props);
    const component = shallow(
      <Provider store={store}>
        <CartContainer />
      </Provider>,
    );
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addToCart();
    mapDispatchToProps(dispatch).removeFromCart();
    mapDispatchToProps(dispatch).salesRecord();
  });
});

describe('TEST FOR CHECHOUT', () => {
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
  const response = { message: 'add to cart' };
  axios.post.mockImplementation(() =>
    Promise.resolve({ message: { ...response } }),
  );
  store.dispatch(createSalesRecord()).then(() => {
    store.dispatch('ADD_TO_CART');
  });
});

describe('cart Reducers', () => {
  it('should setup default state values', () => {
    const state = cartReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({ data: [] });
  });

  it('it should add one product to cart state', () => {
    const action = {
      type: 'ADD_TO_CART',
      data: [{ quantityInCart: 1 }],
    };
    const state = cartReducer(undefined, action);
    expect(state.data).toEqual(action.data);
  });

  it('it should change make sales error state', () => {
    const action = {
      type: 'MAKE_SALES_ERROR',
      salesError: undefined,
    };
    const state = cartReducer(undefined, action);
    expect(state.undefined).toEqual(action.undefined);
  });
});

describe('CART Actions', () => {
  it('it should set the sales record state', () => {
    const action = setSalesRecord(constants.SALES_SUCESS);
    expect(action).toEqual({
      type: types.MAKE_SALES,
      salesState: constants.SALES_SUCESS,
    });
  });

  it('it should set the sales error message', () => {
    const action = setSalesError(constants.SALES_ERROR);
    expect(action).toEqual({
      type: types.MAKE_SALES_ERROR,
      salesError: constants.SALES_ERROR,
    });
  });
});
