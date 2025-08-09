import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 ml-8">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Caliber Enterprises</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading brick manufacturer with state-of-the-art manufacturing facility.
              Providing high-quality cement bricks, flyash bricks, and paver blocks since our inception.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="no-bg-icon hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" ><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.239-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.94 1.63 4 4 0 0 1 7.94-1.63z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z" /></svg>
              </a>
            </div>
          </div>



          {/* Products */}
          <div className="space-y-4 ml-12" >
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
          {/* Quick Links */}
          <div className="space-y-4 ml-12">
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

          {/* Contact Info */}
          <div className="space-y-4 ml-12">
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


        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              © {new Date().getFullYear()} Caliber Enterprises. All rights reserved.
            </p>
            <p>
              Designed and Developed by
              <a
                href="https://rsinfotechsys.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 no-underline uppercase hover:text-orange-400"
              >
                © {new Date().getFullYear()} Right Serve Infotech System Pvt Ltd.
              </a>
            </p>
          </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
