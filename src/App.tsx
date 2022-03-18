import React from 'react';
import logo from './logo.svg';
import './App.css';
import casbinService from './CasbinService';

function App() {
  const policies: string[] = [
    "p, alice, *, read",
    "p, alice, *, write",
  ];

  casbinService.setPolicies(policies.join('\n'));
  const isAllowed: boolean = casbinService.enforce('alice', '*', 'read');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>{isAllowed}</h1>
      </main>
    </div>
  );
}

export default App;
