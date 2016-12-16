import React, { Component } from 'react';
import logo from './assets/images/logo-judo-heroes.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To be <code>continued...</code>
        </p>
        <div className="App-footer">
          <a href="https://facebook.github.io/react/tutorial/tutorial.html" target="_blank">Want to know more about React..?</a>
        </div>
      </div>
    );
  }
}

export default App;
