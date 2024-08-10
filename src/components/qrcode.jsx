import React, { useState } from 'react';
import QRCode from 'qrcode.react';


function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateQRCode = () => {
    setQrValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-1"></h1>
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
          <QRCode value={qrValue} size={256} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
