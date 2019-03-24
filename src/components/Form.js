import React from 'react';
import Button from './Button';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      firstNameError: false,
      lastNameError: false,
      addressError: false
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.address === "") {
      if (this.state.firstName === "") {
        this.setState({firstNameError: true})
      }
      if (this.state.lastName === "") {
        this.setState({lastNameError: true})
      }
      if (this.state.address === "") {
        this.setState({addressError: true})
      }
    }
    else {
      alert(`
        First name: ${this.state.firstName}\n
        Last name: ${this.state.lastName}\n
        Address: ${this.state.address}\n
        Address2: ${this.state.address2}
      `);
    }
  }

  handleChange = (e) => {
    const prop = e.target.id;
    const value = e.target.value;
    if (value !== "") {
      this.setState({ [`${prop}Error`]: false });
    }
    this.setState({ [prop]: e.target.value });
  }

  render() {
    return (
      <form className="form">
        <Input 
          label="First name" 
          id="firstName" 
          error={this.state.firstNameError} 
          handleChange={this.handleChange} 
        />
        <Input 
          label="Last name" 
          id="lastName" 
          error={this.state.lastNameError} 
          handleChange={this.handleChange} 
        />
        <Input 
          label="Address" 
          id="address" 
          error={this.state.addressError} 
          handleChange={this.handleChange}
        />
        <Input 
          label="Address 2 (Optional)" 
          id="address2" 
          handleChange={this.handleChange}
        />
        <Button 
          handleSubmit={this.handleSubmit} 
        />
      </form>
    )
  }
}

export default Form;