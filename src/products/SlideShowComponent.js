import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../img/jordans shoe.jpeg';
import img2 from  '../img/walltims.jpeg';
import img3 from  '../img/jor.jpeg';
import img4 from  '../img/femaleshoe.jpeg';
import img5 from  '../img/jor2.jpeg';

class SlideShowComponent extends React.Component {
  constructor(props){
    super(props);
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
    
   </div>);
}
};



export default SlideShowComponent;