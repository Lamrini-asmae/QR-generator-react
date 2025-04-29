// src/App.js
import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const qrRef = useRef(null);

  const handleGenerate = () => {
    setQrValue(text.trim());
  };

  const handleDownload = async () => {
    if (qrRef.current === null) return;
    try {
      const dataUrl = await toPng(qrRef.current);
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download QR code:', err);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🔲 QR Generator</h1>
      </nav>

      <main className="main">
        <div className="qr-form">
          <input
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleGenerate}>Generate</button>
        </div>

        {qrValue && (
          <div className="qr-display">
            <div ref={qrRef} style={{ background: 'white', padding: '16px', display: 'inline-block' }}>
              <QRCode value={qrValue} size={180} />
            </div>
            <br />
            <button onClick={handleDownload}>Download QR Code</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
