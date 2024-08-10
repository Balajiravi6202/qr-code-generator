import React from 'react';
import QRCodeGenerator from '../src/components/qrcode.jsx';
import Navbar from "./components/navbar.jsx";
import Footer from './components/footer.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center pt-20">
        <QRCodeGenerator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
