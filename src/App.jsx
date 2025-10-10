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
import Products from './pages/Services.jsx';
import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      // check if product already exists
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (cartId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar
      cartItems={cartItems}
      addToCart={addToCart}
      updateCartQuantity={updateCartQuantity}
      removeFromCart={removeFromCart}
       getTotalPrice={() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
    />
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} addToCart={addToCart}/>} />
          <Route path="/products" element={<Products cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
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
