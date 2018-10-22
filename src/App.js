import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Layout from './Layout';
import Client from './Client';
import Nav from './Nav';
import Login from './Login';
import AddEmployee from './AddEmployee';


class App extends Component {


  render() {
   
  
    return (
      <div className="App">

      
        <center>
            < Nav />
        
          
        </center>

      </div>
    );
  }
}

export default App;
