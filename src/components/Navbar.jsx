import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // helper to scroll and close menu
  const handleLinkClick = (closeMenu = false) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (closeMenu) setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={() => handleLinkClick()}>
              <img
                src="factory-logo.webp"
                alt="Caliber Enterprises Logo"
                className="h-10 w-auto object-contain rounded-md"
              />
              <span className="text-2xl font-bold text-gray-800">Caliber Enterprises</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/test-reports", label: "Test Reports" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
                onClick={() => handleLinkClick()}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
              onClick={() => handleLinkClick()}
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
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Our Products" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/test-reports", label: "Test Reports" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.to)
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  }`}
                  onClick={() => handleLinkClick(true)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition-colors"
                onClick={() => handleLinkClick(true)}
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
