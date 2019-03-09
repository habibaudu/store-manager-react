import { combineReducers } from 'redux';
import {loginReducer} from '../login';
import {productReducer} from '../products'

export default combineReducers({
  loginReducer,
  productReducer,
  
});


