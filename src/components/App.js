import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import { Login } from '../login';
import { Product } from '../products';
import { Cart } from '../Cart';
import { Record } from '../yourRecords';
import { Admin } from '../admin';
import { AddProduct } from '../admin';
import { CreateAttendant } from '../admin';
import '../styles/index.css';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/products" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/records" component={Record} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/addproduct" component={AddProduct} exact />
        <Route path="/createAttendant" component={CreateAttendant} exact />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
