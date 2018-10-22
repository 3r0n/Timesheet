import React, { Component } from 'react';

class AddEmployee extends Component {

  state = {
    employee: []
  }

  componentDidMount()
  {
    this.getEmployee();
  }

  //prints contents in timesheet table
  getEmployee = _ =>
  {
    fetch('http://localhost:4000/employee')
    .then(response => response.json())
    .then(response => this.setState({employee: response.data}))
    .catch(err => console.log(err))
  }

  renderEmployee = ({id, firstName, lastName, address, phoneNumber, email}) => 
      <tr key={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      </tr>


  render() {
   
    const {employee} = this.state;
    return (
      <div>

        
        <table>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Address</th>
           <th>Phone Number</th>
           <th>Email</th>
         </tr>
        {employee.map(this.renderEmployee)}
        </table>< br />< br />< br />< br />


        
        <h1>Register Employee</h1>

        
        <form action="http://localhost:4000/addEmployee" method="post">
          <input type="text" name="firstName" placeholder="First Name" /> < br />
          <input type="text" name="lastName" placeholder="Last Name" /> < br />
          <input type="text" name="address" placeholder="Address" /> < br />
          <input type="number" name="phoneNumber" placeholder="Phone Number" /> < br />
          <input type="email" name="emailAddr" placeholder="Email" /> < br />
          <input type="password" name="password" placeholder="Password" /> <br />
          <input type="submit" value="Add" /> < br />
        </form>
        
      </div>

      
    );
  }
}

export default AddEmployee;