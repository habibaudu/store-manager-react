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
  const token = localStorage.hasOwnProperty('token')
    ? localStorage.getItem('token')
    : null;
  const role = token != null ? jwtDecode(token).userRole : '';
  const page = role === 'ADMIN' ? `/admin` : `/products`;
  return (
    <Fragment>
      <div>
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
