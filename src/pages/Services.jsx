import React, { useState } from 'react';
import { ShoppingCart, Info, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products'

const Products = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedMessage, setAddedMessage] = useState('');
  const [quantities, setQuantities] = useState({});

  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const [selectedImageIndex, setSelectedImageIndex] = useState(0);







  const addToCart = (product) => {
    const quantity = quantities[product.id] ? parseInt(quantities[product.id], 10) : 1;
    if (quantity < 1 || isNaN(quantity)) return;
    setCart([...cart, { ...product, quantity, cartId: Date.now() }]);
    setAddedMessage(`${product.name} (${quantity}) added to cart!`);
    setShowCart(true);
    setCart([...cart, { ...product, quantity, cartId: Date.now() }]);
    setAddedMessage(`${product.name} (${quantity}) added to cart!`);
    setTimeout(() => setAddedMessage(''), 2000);
    setQuantities({ ...quantities, [product.id]: 1 });
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateCartQuantity = (cartId, newQuantity) => {
    setCart(cart.map(item => item.cartId === cartId ? { ...item, quantity: newQuantity } : item));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const categories = ['All', 'Cement Bricks', 'Flyash Bricks', 'Paver Blocks'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Products & Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of premium quality bricks and paver blocks.
            All products are manufactured at our state-of-the-art 5-acre facility.
          </p>
        </div>

        {/* Add to Cart Message */}
        {addedMessage && (
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded shadow font-medium animate-fade-in">
              {addedMessage}
            </div>
          </div>
        )}

        {/* Category Filter & Cart */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart ({cart.length})</span>
          </button>
        </div>

        {/* Cart Sidebar */}
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

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.cartId} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">₹{item.price} {item.unit}</p>
                          <div className="flex items-center mt-2">
                            <span className="mr-2 text-sm">Qty:</span>
                            <div className="flex items-center space-x-2">
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                              >
                                -
                              </button>

                              <input
                                type="text"
                                value={item.quantity}
                                onChange={e => {
                                  const numericValue = e.target.value.replace(/\D/g, '');
                                  updateCartQuantity(item.cartId, numericValue === '' ? 1 : parseInt(numericValue, 10));
                                }}
                                className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm"
                              />

                              <button
                                type="button"
                                onClick={() => updateCartQuantity(item.cartId, item.quantity + 1)}
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

        {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredProducts.map((product) => {
  const isInCart = cart.find((item) => item.id === product.id);
  return (
      <ProductCard
        key={product.id}
        product={product}
        isInCart={isInCart}
        addToCart={addToCart}
        setSelectedProduct={setSelectedProduct}
        setSelectedImageIndex={setSelectedImageIndex}
        setShowImagePopup={setShowImagePopup}
      />
  );
})}

</div>


        {showImagePopup && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
              <button
                onClick={() => setShowImagePopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ✕
              </button>

              {/* Main selected image */}
              <div className="mb-4">
                <img
                  src={selectedProduct.images[selectedImageIndex]}
                  alt={`${selectedProduct.name} view ${selectedImageIndex + 1}`}
                  className="w-full h-64 object-contain rounded"
                />
              </div>

              {/* Thumbnail images for switching */}
              <div className="flex justify-center gap-2">
                {selectedProduct.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${idx === selectedImageIndex ? 'border-orange-600' : 'border-transparent'}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  />
                ))}
              </div>

              <h3 className="text-lg font-bold mt-6">{selectedProduct.name}</h3>
              <p className="text-sm text-gray-600">{selectedProduct.description}</p>
            </div>
          </div>
        )}



        {/* Services Section */}
        <div className="mt-20 bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Bulk Orders</h3>
              <p className="text-gray-600">Special pricing for large quantity orders. Contact us for wholesale rates.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Custom Sizes</h3>
              <p className="text-gray-600">We can manufacture bricks in custom sizes to meet your specific requirements.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Info className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Technical Support</h3>
              <p className="text-gray-600">Our experts provide technical guidance for your construction projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
