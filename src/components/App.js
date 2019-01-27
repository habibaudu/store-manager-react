import React from 'react';
import {BrowserRouter , Route, Link ,HashRouter } from 'react-router-dom';
import Home from './home';
import Login from './login';
import products from './products';
import  '../styles/index.css';


const App  = () =>{
 
        return (
            <div>
                <HashRouter>
                <div>
                    <Route  exact path="/" component = {Home}/>
                    <Route  exact path="/login" component = {Login}/>
                    <Route  exact path="/products" component = {products}/>

                </div>
                </HashRouter>
            
            </div>
            );
}

export default App;