
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import QrGenerator from './components/QrGenerator';  

function App() {
  return (
    <>
      <Nav/>
      <main className="main">
        <QrGenerator />
      </main>
    </>
  );
}
export default App;
