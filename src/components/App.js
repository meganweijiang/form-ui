import React, { Component } from 'react';
import '../App.scss';
import Form from './Form';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
