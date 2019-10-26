import React from 'react';
import logo from './logo.svg';
import Cypress from './Cypress.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Cypress} className="Cypress-logo" alt="cypress-logo" />
        <p>
          Simple Testing with Cypress.io and FizzBuzz kata
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
