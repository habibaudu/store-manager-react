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
        <div className="adminbox">
          <Link to="/addproduct">
            <button className="addproduct" id="butt">
              +Add Product
            </button>
          </Link>
          <div style={{ overflowX: 'auto' }}>
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
                      <tr key={productname}>
                        <td>{id}</td>
                        <td>{productname}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{minimum}</td>
                        <td>{description}</td>
                        <td>{modified_date}</td>
                        <td>
                          <button
                            id="tes"
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
