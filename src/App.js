import React from 'react';
import './App.css';
import heroBg from '../src/img/vinvar.jpeg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <header className="App-header" style={{ color: 'white', textAlign: 'center', padding: '50px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px', maxWidth: '80%', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)' }}>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>Bringing higher voter turnout in elections</h1>

        <p style={{ fontSize: '1.5rem', margin: '20px 0', lineHeight: '1.5' }}>
          By empowering citizens to make informed voting decisions, VINICI is AI-powered, fact-based profiles of politicians and parties.
          We provide easily digestible profiles showcasing backgrounds, finances, stances on key issues, and more.
        </p>
        
        <button 
          style={{
            padding: '15px 30px', 
            backgroundColor: '#ff6347', 
            border: 'none', 
            borderRadius: '10px', 
            color: 'white', 
            fontSize: '1.2rem', 
            cursor: 'pointer',
            marginTop: '20px'
          }}
          onClick={() => alert('Get Started Clicked!')}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
