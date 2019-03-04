import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import {Login} from '../login';
import {Product} from '../products';
import  '../styles/index.css';


const App = () => (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/products" component={Product} exact />
        </Switch>
      </Fragment>
    </Router>
  );
  
export default App;