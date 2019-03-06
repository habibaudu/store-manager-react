import React from 'react';
import SlideShowComponent from './SlideShowComponent';
import img2 from  '../img/walltims.jpeg';

class ProductComponent extends React.Component {

   componentDidMount(){
     this.props.fetchAllProducts();
    }
 
    handleSearch = event =>{
      const { searchProduct } = this.props;
      const product = event.target.elements.search.value.trim();
      event.preventDefault();
      searchProduct(product)
  }

  extract = img => {
    const getsrc = img
      const getalt = img
      const regex2 = /<img.*?alt='(.*?)'/;
      const regex = /<img.*?src='(.*?)'/;
      const altvalue= regex2.exec(getalt)[1]
      const srcvalue = regex.exec(getsrc)[1];
      return <img src={srcvalue} alt ={altvalue} />;
  }

    render(){
      //
      
   return (
   <div>
     <SlideShowComponent />
<div className ='mobile_header'>
            <img src ={img2} />
</div> 
<section id="title"> 
 Search for Product
 <form id='search' className='byid' onSubmit={this.handleSearch}>
    <input type="text" placeholder="Search product by name.." name="search" id ='filter2' />
    <button type="submit">search </button>
  </form>  
</section>
     
    {this.props.product ? (
      
      <div id ="aproduct" className="article2 clearfix">
                              
                             <section>
                             {this.extract(this.props.product.data.imgs)}
                             </section>
                             <section>
                             <span className ='note'> Details</span>
                              <hr />
                              <span className='note2'>productId : {this.props.product.data.id}</span><br />
                             <span className='note2'>product Name : {this.props.product.data.productname}</span><br />
                             <span className='note'>Price : #{this.props.product.data.price}</span><br />
                             <span className='note2'>Quantity : {this.props.product.data.quantity} in stock</span><br />
                              <span className='note2'>Minimum  : {this.props.product.data.minimum} Allowed in stock</span><br />
                              <span className='note2'>Date Added : {this.props.product.data.created_date} </span><br />
                              <hr /><br />
                              <span className='note'>Description : {this.props.product.data.description} </span><br />
                             </section>
                              
                             
    </div>
    ):' '}
<section id="title">
   <a href ='#'> products </a> 
   </section>

<div id ="allproduct" className="article clearfix">

{this.props.payload ? (
              this.props.payload.map( product => {
                const { productname, id,item,price,quantity} = product;
                const getsrc = item;
                const getalt = item;
                const regex2 = /<img.*?alt='(.*?)'/;
                const regex = /<img.*?src='(.*?)'/;
                const altvalue= regex2.exec(getalt)[1]
                const srcvalue = regex.exec(getsrc)[1]; 
                      
                return (
                  <div key={productname}>
                  <section>
                     {<img src={srcvalue} alt ={altvalue} />}
                     <span className='note2'>{id }</span><br/>
                     <span className='note2'>{productname}</span><br/>
                     <span className='note'>#{price}</span><br/>
                     <span className='note2'>{quantity} in stock</span><br/>
                     <button onClick ={() => {
                       this.props.addToCart(product)
                       
                     }} className='bt'>Add to Cart ({( this.props.cart.length && this.props.cart.filter(cartItem => cartItem.id === product.id).length && this.props.cart.filter(cartItem => cartItem.id === product.id)[0].quantityInCart) ||0 })</button>
                     {this.props.cart.length ?
                     <button onClick ={() => {
                       this.props.removeFromCart(this.props.cart.filter(cartItem => cartItem.id === product.id)[0])
                       
                     }} className='bt'>Remove</button> : null}
                    </section>
                  </div>
                );
              })
            ) : (
              <h3>loading product please wait...</h3>
            )}
    
     
</div>

   </div>);
}
};

export default ProductComponent;