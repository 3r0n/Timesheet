import React, { Component } from 'react';
import Nav from './Nav';

class Client extends Component {

  state = {
    client: []
  }

  componentDidMount()
  {
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

  renderClient = ({id, name, position}) => 
      <tr key={id}>
      <td>{name}</td>
      <td>{position}</td>
      </tr>

  render() {
   
    const {client} = this.state;
    return (
      <div>

        
        <h1>Clients</h1>

        <table>
         <tr>
           <th>Name</th>
           <th>Position</th>
         </tr>
        {client.map(this.renderClient)}
        </table>< br />< br />< br />< br />

        <h2>Please fill out info below</h2>

        <form action="http://localhost:4000/addClient" method="post">
          <input type="text" name="name" placeholder="Managers name" />
          <input type="text" name="position" placeholder="Position" />
          <input type="Submit"  value="Add" /> < br />
        </form>
        
      </div>

      
    );
  }
}

export default Client;