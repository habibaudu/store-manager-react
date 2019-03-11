import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import navSlide from '../js/index';
import img2 from '../img/download.jpeg';
import { actions as loginActions } from '../login/duck';

const { setLoginState } = loginActions;

class NavbarComponent extends React.Component {
  componentDidMount() {
    navSlide();
  }

  render() {
    const token = localStorage.hasOwnProperty('token')
      ? localStorage.getItem('token')
      : null;
    const role = token != null ? jwtDecode(token).userRole : '';
    const { dispatch } = this.props;
    const signUserOut = () => {
      dispatch(setLoginState(''));
      localStorage.removeItem('token');
    };
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
            <li>{role === '' && <Link to="/login">Login</Link>}</li>
            <li>{role === 'USER' && <Link to="/products">products</Link>}</li>
            <li>{role === 'USER' && <Link to="/cart">Cart</Link>}</li>
            <li>{role === 'USER' && <Link to="/records">Records</Link>}</li>

            <li>
              {role === 'ADMIN' && (
                <Link to="/createAttendant">+Attendant</Link>
              )}
            </li>
            <li>
              {role === 'ADMIN' && <Link to="/addproduct">+Product</Link>}
            </li>
            <li>{role === 'ADMIN' && <Link to="/admin">Admin</Link>}</li>
            <li>
              {role !== '' && (
                <Link
                  to="/"
                  onClick={() => {
                    signUserOut();
                  }}
                >
                  <span className="logouts">Logout</span>
                </Link>
              )}
            </li>
            <li>
              {role === 'ADMIN' && (
                <img src={img2} alt="adminlogo" id="adminlogo" />
              )}
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

const mapStateToProps = state => {
  return {
    loginState: state.loginReducer.loginState,
  };
};
export default connect(mapStateToProps)(NavbarComponent);
