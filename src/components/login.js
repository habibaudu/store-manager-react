import React from 'react';
import {connect} from 'react-redux';
import { login as log } from '../actions/login'
import {Link , Redirect} from 'react-router-dom';

class Login  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
      };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlepass = this.handlepass.bind(this);
      }
    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
      }

      handleChange = (e) => {
        this.setState({email: e.target.value})
      }
      handlepass = (e) => {
        this.setState({password: e.target.value})
      }
   
    render(){
        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
         
   return (
   <div>
       <nav>
                <div className ='logo'>
                    <h4>Store Manager</h4>
        
                </div>
                        <ul className='nav-links'>
                            <li> <Link to ='/'>Home</Link></li>
                            <li className ='current'> <Link to='/login'>Login</Link></li>
                            
                        </ul>
                                <div className='burger'>
                                    <div className='line1'></div>
                                    <div className='line2'></div>
                                    <div className='line3'></div>
                                </div>
        </nav>

        <div className ="formbox">
              
              <div className='log_head'><h1>Login Here</h1></div>
      
              <form id='postData' onSubmit={this.onSubmit} >
                  <p>Email</p>
                  <input type="email" name ="" placeholder="Enter  Email"  id="email"  onChange = {this.handleChange} value={this.state.email}/>
                  <p>Password</p>
                  <input type="password" name="" placeholder="Enter password"  id="password" onChange={this.handlepass} value={this.state.password}/>
                  <input type="submit" name ="" value ="submit" />
                  
                  <a href='#'>Lost your passowrd?  </a> 

         
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Login was Successful. <Redirect to="/products" /> </div> }
          { loginError && <div>{loginError.message}</div> }
             
      
              </form>
              <div className='form_footer'>
              <p>Store Manager copyright &copy 2018 </p>
              </div> 
          </div>

   </div>
   
   );
}
}

const mapStateToProps = (state) => {
    console.log(state.loginReducer);
  
    return {
      isLoginPending: state.loginReducer.isLoginPending,
      isLoginSuccess: state.loginReducer.isLoginSuccess,
      loginError: state.loginReducer.loginError
    };
  }

const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(log(email, password))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
