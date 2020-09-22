import React from 'react';
import Example from './components/ej12';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Examples of react router</h1>
      {/* <h1>Examples of react router (try with HashRouter, as in the tutorial)</h1> */}
      <Example />
    </div>
  );
}

export default App;
