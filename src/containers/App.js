import React, { Component } from 'react';
import logo from '../assets/svg/conference-hall.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Korba</h1>
        </header>
        <p className="App-intro">
          Welcome to <code>KorbaMovieFinder</code>! The best movie finder we have ever done!
        </p>
      </div>
    );
  }
}

export default App;
