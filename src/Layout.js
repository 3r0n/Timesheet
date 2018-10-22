import React, { Component } from 'react';
import Nav from './Nav';
import './Layout.css';
import Client from './Client';


class Layout extends Component {

  state = {
    timesheet: [],
    client: []
  }

  componentDidMount()
  {
    this.getTimeSheet();
    this.getClient();
  }

  //prints contents in timesheet table
  getClient = _ =>
  {
    fetch('http://localhost:4000/client')
    .then(response => response.json())
    .then(response => this.setState({client: response.data}))
    .catch(err => console.log(err))
  }

  //renders client for list
  renderClient = ({id, name, position}) => 
      <option key={id}>{name}</option>

  //prints contents in timesheet table
  getTimeSheet = _ =>
  {
    fetch('http://localhost:4000/timesheet')
    .then(response => response.json())
    .then(response => this.setState({timesheet: response.data}))
    .catch(err => console.log(err))
  }

  renderTimesheet = ({id, Title, Client, StartDate, EndDate, Comments}) => 
      <tr key={id}>
      <td>{Title}</td>
      <td>{Client}</td>
      <td>{StartDate}</td>
      <td>{EndDate}</td>
      <td>{Comments}</td>
      </tr>
  render() {
    
    const {timesheet, client} = this.state;
   
    return (
      <div>
       
        <h1>Welcome</h1>

        <table>
         <tr>
           <th>Title</th>
           <th>Client</th>
           <th>StartDate</th>
           <th>EndDate</th>
           <th>Comments</th>
         </tr>
        {timesheet.map(this.renderTimesheet)}
        </table>< br />< br />< br />< br />


        <h2>Please fill out Timesheet below</h2>

        <form method="post" action="http://localhost:4000/addTimesheet">
          <input type="text" name="title" placeholder="Work Title" /> < br />< br />
          <input list="clients" name="client"  placeholder="clients"/>< br />< br />
            <datalist id="clients">
             {client.map(this.renderClient)}
            </datalist>
          <input type="date" name="sDate" placeholder="Start Date" /> < br />< br />
          <input type="date" name="eDate" placeholder="End Date" /> < br />< br />
          <textarea placeholder="Comments..." rows="4" cols="50" name="comment" /> < br />

          <input type="Submit" value="Add" /> < br />
        </form>
        
      </div>

      
    );
  }
}

export default Layout;