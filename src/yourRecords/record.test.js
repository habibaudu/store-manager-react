import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import axios from 'axios';
import RecordComponent from './RecordComponent';
import { RecordContainer, mapDispatchToProps } from './RecordContainer';
import {
  actions,
  types,
  constants,
  recordReducer,
  fetchMyRecords,
} from './duck';

jest.mock('axios');

const { setAllRecords } = actions;
const props = {
  fetchMyRecords: jest.fn(),
  record: {
    records: {
      rows: [
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
  },
};

describe('SALES ATTENDANT RECORD TEST SUITE', () => {
  describe('Record Component', () => {
    it('should render the record Page', () => {
      const component = shallow(<RecordComponent {...props} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });

    it('should render the Record container', () => {
      const component = shallow(<RecordContainer />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });

  it('should ensures mapDispatchToProps dispatches the specified actions', () => {
    const mock = configureStore([thunk]);
    const store = mock(props);
    const component = shallow(
      <Provider store={store}>
        <RecordContainer />
      </Provider>,
    );
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).fetchMyRecords();
  });
});

describe('TEST FOR FETCH SALES ATTENDANT RECORD', () => {
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
  const response = { message: 'fetchall records' };
  axios.get.mockResolvedValue(response);
  store.dispatch(fetchMyRecords()).then(() => {
    store.dispatch(setAllRecords(payload));
  });
});

describe('Record Reducers', () => {
  it('should setup default state values', () => {
    const state = recordReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({});
  });

  it('it should change the load record  state', () => {
    const action = {
      type: types.LOAD_ALL_RECORD,
      records: '5 records',
    };
    const state = recordReducer(undefined, action);
    expect(state.records).toEqual(action.records);
  });
});
