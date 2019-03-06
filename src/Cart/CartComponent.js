import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'

const CartComponent = (props) => {
  const extract = img => {
      const getsrc = img
      const getalt = img
      const regex2 = /<img.*?alt='(.*?)'/;
      const regex = /<img.*?src='(.*?)'/;
      const altvalue= regex2.exec(getalt)[1]
      const srcvalue = regex.exec(getsrc)[1];
      return <img src={srcvalue} alt ={altvalue} />;
  }

  const sort = items => {
    return items.sort((a,b) => a.id < b.id)
  }
  return (
    <Fragment>
    <div>
        <nav>
                 <div className ='logo'>
                     <h4>Store Manager</h4>
         
                 </div>
                         <ul className='nav-links'>
                             <li> <Link to ='/products'>Products</Link></li>
                             <li className ='current'> <Link to='/cart'>Cart</Link></li>
                             
                         </ul>
                                 <div className='burger'>
                                     <div className='line1'></div>
                                     <div className='line2'></div>
                                     <div className='line3'></div>
                                 </div>
         </nav>
 
         <div className ="formbox">
               
               <div className='log_head'><h1>Your Cart</h1></div>
          <div id="cartproduct" className="article">
          {props.cart? (
              sort(props.cart).map(item => {
                return (
                            <div>
                            <div className='show'>{extract(item.item)}</div>
                            <div className='discrip'>
                            <span className='note'>{item.productname}</span><br />
                            <span className='note'>Price :${item.price}</span><br />
                            <span className='note'>Quantity In Cart :{item.quantityInCart}</span><br />
                            <span className='note'>Quantity in Store :{item.quantity}</span><br />
                            <button  className = 'bt2' onClick={() => props.addToCart(item)}>Add</button>
                            <button className = 'bt2' onClick={() => props.removeFromCart(item)}>Remove</button>
                            <br /><br /><br /><br />
                            </div> 
                            </div>
                )
              })   
            ) : (
              <h3>loading cart please wait...</h3>
            )}
    
          </div>
          
               
               <div className='form_footer clearfix'>
               <p></p>
               </div> 
           </div>
 
    </div>
    </Fragment>
    
    );
 }
 const mapStateToProps = (state) => {
   return {
    cart: state.cartReducer,
   }
 }

 const mapDispatchToProps = (dispatch) => {
  return {
   addToCart: (item) => {
     dispatch({type: 'ADD_TO_CART',payload: item})
   },
   removeFromCart: (item) => {
     dispatch({type:'REMOVE_FROM_CART',payload:item})
   }
  }
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartComponent);

export { CartContainer, mapDispatchToProps, mapStateToProps };

