import React from 'react';
import { Link } from 'react-router-dom';
import navSlide from '../js/index';

class NavbarComponent extends React.Component {
  componentDidMount() {
    navSlide();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <h4>Store Manager</h4>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/createAttendant">Create Attendant</Link>
            </li>
            <li>
              <img src={img2} alt="adminlogo" id="adminlogo" />
            </li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarComponent;
