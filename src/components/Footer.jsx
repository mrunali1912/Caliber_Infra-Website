import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Caliber Infra</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading brick manufacturer with state-of-the-art manufacturing facility. 
              Providing high-quality cement bricks, flyash bricks, and paver blocks since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-orange-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Cement Bricks (4", 6", 9")</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Flyash Bricks (4", 6")</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Paver Blocks</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Custom Size Bricks</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>info@caliberinfra.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                <span className="leading-relaxed">
                  Manufacturing Plant<br />
                  Industrial Area, Mumbai
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Caliber Infra. All rights reserved. | Founder & CEO: Gaurav Giri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
