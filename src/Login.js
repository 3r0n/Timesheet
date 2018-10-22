import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Layout from './Layout';
import Client from './Client';


class Login extends Component {


    render() {
     
    
      return (
       
        <div>
            <form>
                <input type="email" placeholder="Email" /><br /><br />
                <input type="password" placeholder="Password" /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
 
      );
    }
  }
  
  export default Login;
  
