import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const qrRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateQRCode = () => {
    setQrValue(inputValue);
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL("image/png");
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.png';
    a.click();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
        className="border p-2 mb-4 w-80"
      />
      <button
        onClick={generateQRCode}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Generate QR Code
      </button>
      {qrValue && (
        <div className="mt-8">
          <div ref={qrRef}>
            <QRCode value={qrValue} size={145} />
          </div>
          <button
            onClick={downloadQRCode}
            className="mt-3 bg-green-500 text-white py-2 px-6 rounded  justify-center"
          >
            Download QR 
          </button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
