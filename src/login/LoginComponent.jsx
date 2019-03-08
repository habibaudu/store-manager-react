import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import EllipsisLoaderComponent from '../loaders';
import { PreloaderComponent } from '../loaders';
import { constants } from './duck';

export const LoginComponent = ({ loginUser, loginState, loginData }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    loginUser(email, password);
  };

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

            <a href="#">Lost your passowrd? </a>

            {loginState === constants.LOGGING_IN && 'please wait ...'}
            {loginState === constants.LOGIN_SUCCESS && (
              <div>
                Login was Successful. <Redirect to="/admin" />{' '}
              </div>
            )}
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
