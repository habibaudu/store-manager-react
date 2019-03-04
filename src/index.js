import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from  './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, 
  {}, 
  composeEnhancers(applyMiddleware(thunk, logger)));

const displayIn = document.querySelector('#store-manager-app');
reactDOM.render(
<Provider store = {store} >

<App/>

</Provider>, displayIn);