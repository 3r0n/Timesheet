import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Layout from './Layout';
import Client from './Client';
import AddEmployee from './AddEmployee';


class Nav extends Component {


    render() {
     
    
      return (
        <Router>
        <div>
          <ul>
            <li>
            <Link to='/home'>Home</Link>
            </li>
            <li>
            <Link to='/client'>Client</Link>
            </li>
            <li>
            <Link to='/addEmployee'>Add Employee</Link>
            </li>
          </ul>

          <Route path={"/home"} exact strict component={Layout}></Route>
          <Route path={"/client"} exact strict component={Client}></Route>
          <Route path={"/addEmployee"} exact strict component={AddEmployee}></Route>
        </div>
        </Router>
      );
    }
  }
  
  export default Nav;
  