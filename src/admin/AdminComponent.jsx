import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../img/download.jpeg';
class AdminComponent extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
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
              {' '}
              <div className="dropdown">
                <span className="dropbtn">User</span>
                <div className="dropdown-content">
                  <Link to="/createAttendant">Create Attendant</Link>
                </div>
              </div>
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

        <div className="adminbox">
          <Link to="/addproduct">
            <button className="addproduct" id="butt">
              +Add Product
            </button>
          </Link>
          <div>
            {this.props.payload ? (
              <table style={{ overflowX: 'auto' }}>
                <thead>
                  <tr>
                    <th>ProductID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Minimum Allowed</th>
                    <th>Description</th>
                    <th>Modified At</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="allproducts">
                  {this.props.payload.map(product => {
                    const {
                      id,
                      productname,
                      price,
                      minimum,
                      quantity,
                      description,
                      modified_date,
                    } = product;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{productname}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{minimum}</td>
                        <td>{description}</td>
                        <td>{modified_date}</td>
                        <td>
                          <button
                            className="bt3"
                            onClick={() => this.props.deleteProduct(id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h3>loading product please wait...</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminComponent;
