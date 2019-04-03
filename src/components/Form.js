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
      phone: "",
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
        Address2: ${this.state.address2}\n
        Phone Number: ${this.state.phone}
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

  findDiffPos = (a, b) => {
    let i = 0;
    if (a === b) {
      return -1;
    }
    while (a[i] === b[i]) {
      i++;
    }
    return i;
  }

  handlePhoneChange = (e) => {
    const value = e.target.value;

    let result = "";
    let numbers = value.replace(/[^\d]/g, '');
    const length = numbers.length;

    if (length > 0) {
      result = "(";
    }
    if (length > 10) {
      numbers = numbers.substring(0, 10);
    }

    [...numbers].forEach((number, i) => {
      if (i === 3) {
        result += ") ";
      }
      if (i === 6) {
        result += "-";
      }
      result += number;
    })

    this.setState({ phone: result });
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
        <Input 
          label="Phone Number" 
          id="phone" 
          handleChange={this.handlePhoneChange}
          value={this.state.phone}
        />
        <Button 
          handleSubmit={this.handleSubmit} 
        />
      </form>
    )
  }
}

export default Form;