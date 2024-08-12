import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import QRCodeGenerator from './components/qrcode.jsx';
import Service from './components/service.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center pt-20">
          <Routes>
            <Route path="/" element={<QRCodeGenerator />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
