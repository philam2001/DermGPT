import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Question from './components/Question';
import Response from './components/Response';

function App() {
  const [answer, setAnswer] = useState('Ask your dermatology question!');

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>DermatologyGPT</h1>
      <Question onAnswer={setAnswer} />
      <Response answer={answer} />
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
