import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/election" className="hover:text-gray-400 transition duration-300">
                Elections
              </Link>
            </li>
            <li>
              <Link to="/methodologies" className="hover:text-gray-400 transition duration-300">
                methodologies
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 transition duration-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
