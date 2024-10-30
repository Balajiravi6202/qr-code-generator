import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/qrlogo.png" className="h-10" alt="QR Code" />
          <span className="text-xl font-semibold dark:text-white">WEB TECH</span>
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full md:w-auto absolute md:static bg-white dark:bg-gray-900 md:bg-transparent top-16 left-0 md:top-auto md:left-auto md:space-x-8 p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 px-3 text-white bg-green-500 rounded hover:bg-green-600 md:dark:bg-green-500"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
