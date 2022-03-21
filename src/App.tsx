import React from 'react';
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
    <main>
      <h1>isAllowed: {isAllowed.toString()}</h1>
    </main>
  );
}

export default App;
