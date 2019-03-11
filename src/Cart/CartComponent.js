import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSalesRecord } from './operations';
import types from './types';
import constants from './constants';

const CartComponent = props => {
  const extract = img => {
    const getsrc = img;
    const getalt = img;
    let regex2 = /<img.*?alt='(.*?)'/;
    let regex = /<img.*?src='(.*?)'/;

    const altvalue = regex2.exec(getalt) ? regex2.exec(getalt)[1] : ' ';
    const srcvalue = regex.exec(getsrc) ? regex.exec(getalt)[1] : '';
    return <img src={srcvalue} alt={altvalue} />;
  };

  const sort = items => {
    return items.sort((a, b) => a.id < b.id);
  };
  let total = 0;
  let sales = {};
  sales.salesOrders = [];

  const makeSales = e => {
    e.preventDefault();
    const { salesRecord } = props;
    salesRecord(sales);
  };
  return (
    <Fragment>
      <div>
        <div className="formbox">
          {props.cart.salesState === constants.MAKING_SALES &&
            'please wait creating sales record...'}
          {props.cart.salesState === constants.SALES_SUCESS && (
            <div>
              Sales Record Created. <Redirect to="/products" />{' '}
            </div>
          )}
          <div className="log_head">
            <h1>Your Cart</h1>
          </div>
          <div id="cartproduct" className="article">
            {props.cart.data ? (
              sort(props.cart.data).map(item => {
                total += item.price * item.quantityInCart;
                sales.salesOrders.push({
                  product_id: item.id,
                  quantity: item.quantityInCart,
                });
                return (
                  <div key={item.productname}>
                    <div className="show">{extract(item.item)}</div>
                    <div className="discrip">
                      <span className="note">{item.productname}</span>
                      <br />
                      <span className="note">Price :${item.price}</span>
                      <br />
                      <span className="note">
                        Quantity In Cart :{item.quantityInCart}
                      </span>
                      <br />
                      <span className="note">
                        Quantity in Store :{item.quantity}
                      </span>
                      <br />
                      <button
                        className="bt2"
                        onClick={() => props.addToCart(item)}
                      >
                        Add
                      </button>
                      <button
                        className="bt2"
                        onClick={() => props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>loading cart please wait...</h3>
            )}
            <span className="note">Total :{total}</span>
            <br />
            <form id="cart" onSubmit={makeSales}>
              <input type="submit" value="Checkout" />
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
          <div className="form_footer clearfix">
            <p />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
    salesState: state.cartReducer.salesState,
    salesError: state.cartReducer.salesError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD_TO_CART', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    },
    salesRecord: salesOrder => {
      dispatch(createSalesRecord(salesOrder));
    },
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartComponent);

export { CartContainer, mapDispatchToProps, mapStateToProps, CartComponent };
