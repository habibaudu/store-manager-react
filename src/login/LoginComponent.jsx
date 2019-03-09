import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { constants } from './duck';
import jwtDecode from 'jwt-decode';

export const LoginComponent = ({ loginUser, loginState }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    loginUser(email, password);
  };
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '';
  const role = jwtDecode(token).userRole;
  const page = role === 'ADMIN' ? `/admin` : `/products`;
  return (
    <Fragment>
      <div>
        <nav>
          <div className="logo">
            <h4>Store Manager</h4>
          </div>
          <ul className="nav-links">
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li className="current">
              {' '}
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>

        <div className="formbox">
          {loginState === constants.LOGGING_IN &&
            'please wait checking your credentials ...'}
          {loginState === constants.LOGIN_SUCCESS && (
            <div>
              Login was Successful. <Redirect to={page} />{' '}
            </div>
          )}
          <div className="log_head">
            <h1>Login Here</h1>
          </div>

          <form onSubmit={onFormSubmit}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter  Email"
              id="email"
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id="password"
            />
            <input type="submit" name="" value="submit" />
          </form>
          <div className="form_footer">
            <p>Store Manager copyright &copy 2018 </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginComponent;
