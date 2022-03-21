import React, { useEffect, useState } from 'react';
import './App.css';
import CasbinService from './CasbinService';
// import casbinService from './CasbinService';

function App() {
  const [isAllowed, setIsAllowed] = useState(false);
  const policies: string[] = [
    "p, alice, *, read",
    "p, alice, *, write",
  ];

  CasbinService.setPolicies(policies.join('\n'));
  // const isAllowed: boolean = casbinService.enforce('alice', '*', 'read');

  useEffect(() => {
    console.log('effects hurt my brain')
    setIsAllowed(CasbinService.enforce('alice', '*', 'read'))
  }, []);



  return (
    <div className="App">
      <main>
        <h1>isAllowed: {isAllowed.toString()}</h1>
      </main>
    </div>
  );
}

export default App;
