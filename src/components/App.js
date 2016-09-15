import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todo from './components/todoform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <todo></todo>
        </p>
      </div>
    );
  }
}

export default App;
