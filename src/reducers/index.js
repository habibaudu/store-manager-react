import { combineReducers } from 'redux';
import {loginReducer} from '../login';
import {productReducer} from '../products'
import cartReducer from '../Cart/reducer'

export default combineReducers({
  loginReducer,
  productReducer,
  cartReducer,
  
});


