import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { constants } from './duck';
import { createAttendant } from './duck';
import { connect } from 'react-redux';

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
    const password2 = e.target.elements.password2.value.trim();
    const Role = e.target.elements.role.value.trim();
    if (password !== password2) {
      alert('passwords do not match');
      return;
    }
    signupUser(email, password, username, Role);
  };

  return (
    <div>
      <Fragment>
        <div className="formbox">
          {signupState === constants.SIGNING_UP &&
            'Creating Attendant please wait....'}
          {signupState === constants.SIGNUP_SUCCESS &&
            'Attendant created sucessfully'}
          {signupState === constants.SIGNUP_ERROR &&
            'Error occured while creating an attendant'}
          <div className="log_head">
            <h1>Create User</h1>
          </div>

          <form onSubmit={onFormSubmit}>
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
              name="password2"
              placeholder="confirm password"
              id="password2"
            />
            <p>Role</p>
            <br />
            <select name="role" id="Role">
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <br />

            <input type="submit" name="" value="submit" />
          </form>
          <div className="form_footer">
            <p>Store Manager copyright &copy 2018 </p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signupState: state.adminReducer.signupState,
    errorMessage: state.adminReducer.errorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (email, password, username, Role) =>
      dispatch(createAttendant(email, password, username, Role)),
  };
};
const CreateAttendantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAttendantComponent);

export {
  CreateAttendantContainer,
  CreateAttendantComponent,
  mapDispatchToProps,
};
