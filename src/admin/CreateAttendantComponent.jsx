import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { constants } from './duck';

const CreateAttendantComponent = ({
  signupUser,
  signupState,
  errorMessage,
}) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    const password2 = e.target.elements.rePassword.value.trim();
    if (password !== password2) {
      alert('passwords do not match');
      return;
    }
    signupUser(email, password, username, Role);
  };

  if (signupState === constants.SIGNUP_SUCCESS) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <Fragment>
        <nav>
          <div className="logo">
            <h4>Store Manager</h4>
          </div>
          <ul className="nav-links">
            <li>
              {' '}
              <Link to="/admin">Admin</Link>
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
            <h1>Create User</h1>
          </div>

          <form>
            <p>User name</p>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              id="username"
            />
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              id="email"
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id="password"
            />
            <p>confirm password</p>
            <input
              type="password"
              name="password"
              placeholder="confirm password"
              id="password2"
            />
            <p>Role</p>
            <br />
            <select name="" id="Role">
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <br />

            <input type="submit" name="" value="submit" />
          </form>
          <div class="form_footer">
            <p>Store Manager copyright &copy 2018 </p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default CreateAttendantComponent;
