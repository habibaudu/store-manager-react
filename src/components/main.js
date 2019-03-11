import React from 'react';

import { Link } from 'react-router-dom';
import img from '../img/jor2.jpeg';

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="divide clearfix">
          <section className="landing2">
            <img src={img} />
          </section>

          <section className="landing">
            <div className="logo_landing">
              <h4>Store Manager</h4>
            </div>
            <p>
              Welcome to Exclusive shoe's STORE MANAGER app,which aids in
              effective management of our Store.To continue login with admin
              provided login credentials
            </p>
            <Link to="/login" className="btn1">
              Login
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
