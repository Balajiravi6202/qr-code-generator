import React from 'react';
import { FaCode, FaPencilRuler, FaCogs } from 'react-icons/fa';

function Service() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaCode className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-700">We offer full-stack web development services tailored to your business needs. Our team is proficient in modern technologies like HTML, CSS, JavaScript, React, Node.js, and more to build responsive, scalable, and secure web applications.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaPencilRuler className="text-4xl text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">UI/UX Designing</h2>
          <p className="text-gray-700">Our design team focuses on creating intuitive and engaging user interfaces that enhance the user experience. We prioritize user-centric designs to ensure your website or app is not only visually appealing but also easy to navigate.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaCogs className="text-4xl text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">API Integration</h2>
          <p className="text-gray-700">Seamlessly connect your applications with third-party services through our API integration services. We specialize in integrating various APIs to enhance functionality, improve performance, and ensure smooth data flow across your platforms.</p>
        </div>
        
      </div>
    </div>
  );
}

export default Service;
