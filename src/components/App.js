import React from 'react';
import {BrowserRouter , Route, Link ,HashRouter } from 'react-router-dom';
import home from './home';
import  '../styles/index.css';


const App  = () =>{
 
        return (
            <div>
                <HashRouter>
                <div>
                    <Route  exact path="/" component = {home}/>
                </div>
                </HashRouter>
            
            </div>
            );
}

export default App;