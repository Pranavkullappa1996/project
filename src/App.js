import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Back'
import Post from './Post'



class App extends Component { 
  
render() {
  return(
    
    <BrowserRouter>
    
    
    <div className="App">
    <Header />
    <Route exact path ='/' component={Home} />
    <Route path="/:post_id" component={Post} />
    
    </div>
  
   
    </BrowserRouter>




    
  );
 }
}

export default App
    