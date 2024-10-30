import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import QRCodeGenerator from './components/qrcode.jsx';
import Service from './components/service.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode" element={<QRCodeGenerator />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
          </Routes>
        </div>
    
      </div>
    </Router>
  );
}

export default App;
