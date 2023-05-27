import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between px-4 py-3">
        <div>
         <img src="../assets/images/2023/01/logo.jpg" alt="" />
        </div>
        <div className="flex items-center">
          <button
            className="p-2 mr-2 text-gray-400 rounded hover:text-white hover:bg-gray-700 focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-4`}
          >
            <li>
              <Link
                to="/"
                className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ProductCard"
                className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
              >
                 Products
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
              >
               
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
