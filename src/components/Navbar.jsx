import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-800">Caliber Infra</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
             Services
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/gallery') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/test-reports"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/test-reports') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              Test Reports
            </Link>
            <Link
              to="/careers"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/careers') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Our Products
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/gallery') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/test-reports"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/test-reports') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Test Reports
              </Link>
              <Link
                to="/careers"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/careers') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
