import React from 'react';
import SlideShowComponent from './SlideShowComponent';
import img2 from  '../img/walltims.jpeg';

class ProductComponent extends React.Component {
  constructor(props){
    super(props);
  }
   componentDidMount(){
     this.props.fetchAllProducts();
    }
    render(){
   return (
    
   <div>
     <SlideShowComponent />
<div className ='mobile_header'>
            <img src ={img2} />
</div> 
<section id="title"> 
 Search for Product
 <form id='search' className='byid'>
    <input type="text" placeholder="Search product by name.." name="search" id ='filter2' />
    <button type="submit">search </button>
  </form>  
</section>
     
    <div id ="aproduct" className="article2 clearfix">
         
    </div>
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
                     <a href='addcart.html' className='btn2'>Add to Cart</a>
                    </section>
                  </div>
                );
              })
            ) : (
              <h3>loading product please wait...</h3>
            )}
    
     
</div>
{/* <p className ='note2'>page 1 of 4     <a href="#" className='btn2'>next</a></p> */}
   </div>);
}
};

export default ProductComponent;