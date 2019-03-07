import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import  EllipsisLoaderComponent  from '../loaders';
import {addProduct}  from './duck';
import {constants} from './duck'


const images= 'https://res.cloudinary.com/hba821/image/upload/v1551973753/shoeavater.jpg'

class addProductComponent extends React.Component {
  
  onFormSubmit = e => {
    e.preventDefault();
    const {addProduct} = this.props
    const productname = e.target.elements.productname.value.trim();
    const price = parseInt(e.target.elements.price.value.trim(),10);
    const minimum = parseInt(e.target.elements.minimum.value.trim(),10);
    const quantity = parseInt(e.target.elements.quantity.value.trim(),10);
    const description = e.target.elements.description.value.trim();
    
    addProduct(productname, price,minimum,quantity,images,description);
  };
  
  render(){
 
    const {errormessage, status }= this.props;
  return (
    <Fragment>
    <div>
        <nav>
                 <div className ='logo'>
                     <h4>Store Manager</h4>
         
                 </div>
                         <ul className='nav-links'>
                             <li> <Link to ='/'>Home</Link></li>
                             <li className ='current'> <Link to='/admin'>Admin</Link></li>
                             
                         </ul>
                                 <div className='burger'>
                                     <div className='line1'></div>
                                     <div className='line2'></div>
                                     <div className='line3'></div>
                                 </div>
         </nav>
 
         <div className="addbox"> 
          <div className='log_head'><h1>Create product</h1></div>
          <hr />
          <br /><br />
          <p>Fill all fields in the form below and click submit or cancel to go back</p>
          <br /><br /> 
          <form onSubmit = {this.onFormSubmit}>       
                <p>Product Name</p><br />
                <input type="text" name ="productname" placeholder="Product Name" id="productname" /><br />
                <p>Price</p><br />
                <input type="text" name ="price" placeholder="Product Price" id='Price' /><br />
                <p>Minimum Allowed</p><br />
                <select name="minimum" id="Minimum">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
               </select><br />
                <p>Quantity</p><br />

                <select name="quantity" id="Quantity">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                </select><br />

                <label id="#bb"> choose image
                <input
                            type="file"
                            name="profilepix"
                            id="img"
                            
                          />
                </label>
                <textarea name="description" id="description" cols="20" rows="5" placeholder="Enter Description of product"></textarea><br /><br /> 
                <Link to = '/admin' className="cancelproduct">Cancel</Link><br /><br />
                <input type="submit"  value="submit" /><br />

              </form>
        </div>
        {status === constants.ADDING_PRODUCT &&  (
                   'please wait ...'
                  )}
           { status === constants.PRODUCT_SUCESSFULLY_ADDED && <div>products Added successfully. <Redirect to="/admin" /> </div> }
 
    </div>
    </Fragment>
    
    );
  }
 }
 
const mapStateToProps = (state) => {
  return {
          productadded :state.adminReducer.productadded,
          status: state.adminReducer.status,
          errormessage: state.adminReducer.errormessage,
        }
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (productname, price,minimum,quantity,images,description) =>
      dispatch(addProduct(productname, price,minimum,quantity,images,description)),
  };
};
const addProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(addProductComponent);

export { addProductContainer, mapDispatchToProps, mapStateToProps };


