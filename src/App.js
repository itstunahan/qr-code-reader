import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function App() {
  const [qrCodeData, setQrCodeData] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleScan = data => {
    if (data) {
      setQrCodeData(data);
    }
  };

  const handleError = error => {
    console.error(error);
  };

  const toggleCamera = () => {
    setCameraOpen(!cameraOpen);
  };

  return (
    <div className="App">
      <h1>QR Code Reader</h1>
      <button onClick={toggleCamera}>
        {cameraOpen ? 'Close Camera' : 'Open Camera'}
      </button>
      {cameraOpen && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      )}
      {qrCodeData && (
        <div className="qr-data">
          <p>Scanned QR Code:</p>
          <code>{qrCodeData}</code>
        </div>
      )}
    </div>
  );
}

export default App;
