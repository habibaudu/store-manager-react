import React from 'react';
import { Link } from 'react-router-dom';

class RecordComponent extends React.Component {
  componentDidMount() {
    this.props.fetchMyRecords();
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
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/products">products</Link>
            </li>
            <li>
              {' '}
              <Link to="/records">Records</Link>
            </li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>

        <div className="addbox">
          <div className="log_head">Your Records</div>
          <div style={{ overflowX: 'auto' }}>
            {this.props.record.records ? (
              <table id="myrecords">
                <thead>
                  <tr>
                    <th>salesID</th>
                    <th>Sold By</th>
                    <th>Product Name</th>
                    <th>Price Each</th>
                    <th>Quantity Sold</th>
                    <th>Price Sold</th>
                    <th>Total Amount</th>
                    <th>Date Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.record.records.rows.map(record => {
                    const {
                      id,
                      productname,
                      price,
                      attendants_id,
                      totalprice,
                      total,
                      quantity,
                      created_date,
                    } = record;
                    return (
                      <tr key={productname}>
                        <td>{id}</td>
                        <td>{attendants_id}</td>
                        <td>{productname}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>${total}</td>
                        <td>${totalprice}</td>
                        <td>{created_date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h3>loading records please wait...</h3>
            )}

            <div className="form_footer">
              <p>Store Manager copyright &copy 2018 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordComponent;
