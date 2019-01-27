import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllProduct} from '../actions/products';
import img1 from '../img/jordans shoe.jpg';
import img2 from  '../img/walltims.jpg';
import img3 from  '../img/jor.jpg';
import img4 from  '../img/femaleshoe.jpg';
import img5 from  '../img/jor2.jpg';

class products extends React.Component {
  constructor(props){
    super(props);
  }


   componentDidMount(){
     
        this.props.fetchAllProduct();
    }
  
  
    
    render(){
   return (
   <div>
              <nav>
                <div className ='logo'>
                    <h4>Store Manager</h4>
        
                </div>
                        <ul className='nav-links'>
                            <li> <Link to = '/'>Home</Link></li>
                            <li className ='current'> <Link to='/products'>Products</Link></li>
                            <li> <a href ='viewRecord.html'>Records</a></li>
                           
                            
                        </ul>
                                <div className='burger'>
                                    <div className='line1'></div>
                                    <div className='line2'></div>
                                    <div className='line3'></div>
                                </div>
        </nav>
    <header>
       
            <input type="radio" id ='value1' name ='image' readOnly />
            <input type="radio" id ='value2' name ='image' readOnly/>
            <input type="radio" id ='value3' name ='image' readOnly/>
            <input type="radio" id ='value4' name ='image' readOnly/>
            <input type="radio" id ='value5' name ='image' readOnly />
    
            <div className='slide_img' id='one'>

              <img src ={img5} />
              <label className='prev' htmlFor ='value5'>
              </label>
              <label className='next' htmlFor ='value2'>
              </label>
            </div>
        
        <div className='slide_img' id='two'>
            <img src ={img4}/>
            <label className='prev' htmlFor ='value1'>
            </label>
            <label className='next' htmlFor = 'value3'>
            </label>
          </div>
      
    
      <div className='slide_img' id='three'>
        <img src ={img3} />
        <label className='prev' htmlFor ='value2'>
        </label>
        <label className='next' htmlFor ='value4'>
        </label>
      </div>
    
    <div className='slide_img' id='four'>
        <img src ={img2} />
        <label className='prev' htmlFor ='value3'>
        </label>
        <label className='next' htmlFor ='value5'>
        </label>
      </div>
    
    <div className='slide_img' id='five'>
        <img src ={img1} />
        <label className='prev' htmlFor ='value4'>
        </label>
        <label className='next' htmlFor ='value1'>
        </label>
      </div>
    
    <div id='nav_slide'>
    
        <label htmlFor ='value1' className='dots' id='dot1'></label>
        <label htmlFor ='value2' className='dots' id='dot2'></label>
        <label htmlFor ='value3' className='dots' id='dot3'></label>
        <label htmlFor='value4' className='dots' id='dot4'></label>
        <label htmlFor ='value5' className='dots' id='dot5'></label>
    </div>
   
       
    </header>
    
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
              this.props.payload.map(product=> {
                
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
<p className ='note2'>page 1 of 4     <a href="#" className='btn2'>next</a></p>
<footer id ='sec'>
        <p>Store Manager copyright &copy 2018 </p>         
</footer>



   </div>);
}
};

const mapStateToProps = (state) => {
  return {payload :state.productReducer.products}
}





export default connect(mapStateToProps,{fetchAllProduct})(products);