import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import DeveloperComponent from './Components/developer';
// import CompanyComponent from './Components/company';
import ParticleComponent from './Components/particle';

class App extends Component {

    render() {

      let b = 'Bart';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {b}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <ParticleComponent/>

      </div>
    );
  }
}

export default App;
