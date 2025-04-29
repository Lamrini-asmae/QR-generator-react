import React from 'react';
import './App.css';
import Nav from './components/Nav';
import QrGenerator from './components/QrGenerator';  

function App() {
  return (
    <div className="app">
      <Nav />  
      <main className="main">
        <QrGenerator />
      </main>
    </div>
  );
}

export default App;
