import React from 'react';
import logo from './logo.svg';
import dLogo from './donoteLogo.png'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dLogo} className="App-logo" alt="logo" />
        <p>
          Nyan <code>src/App.tsx</code> and Nyan to Nyan.
        </p>
        <a
          className="App-link"
          href="https://github.com/startergate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Nyan
        </a>
      </header>
    </div>
  );
}

export default App;
