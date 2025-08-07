import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import Careers from './pages/Careers.jsx';
import TestReports from './pages/TestReports.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/test-reports" element={<TestReports />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
