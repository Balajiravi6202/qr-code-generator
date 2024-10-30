import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaCode, FaPencilRuler, FaCogs } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {
  // Slide-in variants for animations
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };


  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Adjust this path to the route of your contact component
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <motion.header
        className="bg-white shadow-md py-4"
        initial="hidden"
        animate="visible"
        variants={slideInDown}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
          <nav className="space-x-4">
            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('https://csladda.com/wp-content/uploads/2019/06/web-design-banner-1024x415.jpg')" }}
      >
        <motion.div
          className="container mx-auto px-6 text-center bg-opacity-75 bg-black py-20 rounded-md"
          initial="hidden"
          animate="visible"
          variants={slideInUp}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg mb-8">Your solution for awesome web design and development</p>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* About Us Section */}
      {/* <motion.section
        id="about"
        className="py-20 container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          We are a team of dedicated designers and developers, passionate about creating beautiful, functional websites that drive results.
          Our expertise lies in design, development, and optimization to ensure a seamless digital experience.
        </p>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">1+</h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">50+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">10+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </motion.section> */}


      {/* About Us Section */}
      <motion.section
        id="about"
        className="py-20 container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          We are a team of dedicated designers and developers, passionate about creating beautiful, functional websites that drive results.
          Our expertise lies in design, development, and optimization to ensure a seamless digital experience.
        </p>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">
              <CountUp start={0} end={1} duration={2} />+
            </h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">
              <CountUp start={0} end={50} duration={2} />+
            </h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl font-bold text-blue-600">
              <CountUp start={0} end={10} duration={2} />+
            </h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaCode className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-700">We offer full-stack web development services tailored to your business needs. Our team is proficient in modern technologies like HTML, CSS, JavaScript, React, Node.js, and more to build responsive, scalable, and secure web applications.</p>
        </motion.div>
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaPencilRuler className="text-4xl text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">UI/UX Designing</h2>
          <p className="text-gray-700">Our design team focuses on creating intuitive and engaging user interfaces that enhance the user experience. We prioritize user-centric designs to ensure your website or app is not only visually appealing but also easy to navigate.</p>
        </motion.div>
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaCogs className="text-4xl text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">API Integration</h2>
          <p className="text-gray-700">Seamlessly connect your applications with third-party services through our API integration services. We specialize in integrating various APIs to enhance functionality, improve performance, and ensure smooth data flow across your platforms.</p>
        </motion.div>

      </div>
    </div>

      {/* Testimonials */}
      <motion.section
        className="py-20"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Fantastic work! The team understood our needs and delivered a beautiful, functional website."</p>
              <h4 className="text-lg font-semibold text-gray-800">- Client A</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Our website traffic doubled in just two months! We couldn't be happier with the results."</p>
              <h4 className="text-lg font-semibold text-gray-800">- Client B</h4>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        id="contact"
        className="bg-blue-600 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Project?</h3>
          <p className="mb-8">Contact us today to discuss your goals and get a free consultation.</p>
          <button  onClick={handleContactClick} className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-blue-100">
            Contact Us
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-8"
        initial="hidden"
        animate="visible"
        variants={slideInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 My Website. All rights reserved. Owner: Balaji R</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default Home;
