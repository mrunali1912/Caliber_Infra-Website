// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   // helper to scroll and close menu
//   const handleLinkClick = (closeMenu = false) => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     if (closeMenu) setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2" onClick={() => handleLinkClick()}>
//               <img
//                 src="factory-logo.webp"
//                 alt="Caliber Enterprise Logo"
//                 className="h-10 w-auto object-contain rounded-md"
//               />
//               <span className="text-2xl font-bold text-gray-800">Caliber Enterprise</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/services", label: "Services" },
//               { to: "/about", label: "About Us" },
//               { to: "/gallery", label: "Gallery" },
//               { to: "/test-reports", label: "Test Reports" },
//               { to: "/careers", label: "Careers" },
//               { to: "/contact", label: "Contact" },
//             ].map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   isActive(item.to)
//                     ? "text-orange-600 bg-orange-50"
//                     : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
//                 }`}
//                 onClick={() => handleLinkClick()}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
//               onClick={() => handleLinkClick()}
//             >
//               Get a Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/services", label: "Our Products" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/gallery", label: "Gallery" },
//                 { to: "/test-reports", label: "Test Reports" },
//                 { to: "/careers", label: "Careers" },
//                 { to: "/contact", label: "Contact" },
//               ].map((item) => (
//                 <Link
//                   key={item.to}
//                   to={item.to}
//                   className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                     isActive(item.to)
//                       ? "text-orange-600 bg-orange-50"
//                       : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
//                   }`}
//                   onClick={() => handleLinkClick(true)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/contact"
//                 className="block bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition-colors"
//                 onClick={() => handleLinkClick(true)}
//               >
//                 Get a Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = ({ cartItems = [], updateCartQuantity, removeFromCart, getTotalPrice }) => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showCart, setShowCart] = useState(false); // cart drawer
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (closeMenu = false) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (closeMenu) setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick()}
            >
              <img
                src="founder/Logo/CalliberLogo.jpg"
                alt="Caliber Enterprise Logo"
                className="h-10 w-[400] object-fill"
              />
              <span className="text-2xl font-bold text-gray-800">
                Caliber Enterprise
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
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

            {/* Cart Icon */}
            <div
              className="relative text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
              onClick={() => handleLinkClick()}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div
              className="relative text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Our Products" },
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

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Shopping Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          ₹{item.price} {item.unit}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="mr-2 text-sm">Qty:</span>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() =>
                                updateCartQuantity(
                                  item.cartId,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              -
                            </button>

                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => {
                                const numericValue = e.target.value.replace(/\D/g, "");
                                updateCartQuantity(
                                  item.cartId,
                                  numericValue === "" ? 1 : parseInt(numericValue, 10)
                                );
                              }}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm"
                            />

                            <button
                              type="button"
                              onClick={() =>
                                updateCartQuantity(item.cartId, item.quantity + 1)
                              }
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors mt-4">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
