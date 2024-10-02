import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: '#282c34', padding: '50px', color: 'white', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to My Test Page</h1>
        <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
          This is a simple test to check if the integration between React and Softr works.
        </p>
        <img src={logo} className="App-logo" alt="logo" style={{ height: '150px', margin: '20px 0' }} />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 0' }}>
          <button 
            style={{ padding: '10px 20px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }} 
            onClick={() => alert('Button 1 clicked!')}
          >
            Click Me
          </button>
          
          <button 
            style={{ padding: '10px 20px', backgroundColor: '#ff6347', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }} 
            onClick={() => alert('Button 2 clicked!')}
          >
            Another Button
          </button>
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb', fontSize: '1.5rem' }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
