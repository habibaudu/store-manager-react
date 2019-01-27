import React from 'react';
import reaactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from  './components/App';


const displayIn = document.querySelector('#store-manager-app');
reaactDOM.render(

    <App/>

, displayIn);