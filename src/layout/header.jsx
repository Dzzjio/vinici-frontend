import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Home Link */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          <span className="logo">MySite</span> {/* Replace MySite with your logo text */}
        </Link>

        {/* Navigation Links */}
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
