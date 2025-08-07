import React, { useState } from 'react';
import { ShoppingCart, Info, Package } from 'lucide-react';

const Services = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedMessage, setAddedMessage] = useState('');
  const [quantities, setQuantities] = useState({});

  const products = [
    {
      id: 1,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 4 Inch',
      size: '4 inch',
      description: 'High-strength cement bricks ideal for load-bearing walls and structural applications.',
      price: 8,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 90 mm'
      },
      image: '/4-inch-cement-brick.jpg'
    },
    {
      id: 2,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 6 Inch',
      size: '6 inch',
      description: 'Robust cement bricks perfect for heavy-duty construction and commercial buildings.',
      price: 12,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 140 mm'
      },
      image: '/6-inch-cement-brick.webp'
    },
    {
      id: 3,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 9 Inch',
      size: '9 inch',
      description: 'Extra thick cement bricks for maximum strength and thermal insulation.',
      price: 18,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 190 mm'
      },
      image: '/cement-brick-9-inch.webp'
    },
    {
      id: 4,
      category: 'Flyash Bricks',
      name: 'Eco-Friendly Flyash Brick - 4 Inch',
      size: '4 inch',
      description: 'Environmentally sustainable flyash bricks with excellent thermal properties.',
      price: 7,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '4.0 N/mm²',
        waterAbsorption: '< 12%',
        dimensions: '190 x 90 x 90 mm'
      },
      image: '/fly-ash_brick.jpg'
    },
    {
      id: 5,
      category: 'Flyash Bricks',
      name: 'Eco-Friendly Flyash Brick - 6 Inch',
      size: '6 inch',
      description: 'High-performance flyash bricks offering superior strength and eco-friendliness.',
      price: 11,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '4.0 N/mm²',
        waterAbsorption: '< 12%',
        dimensions: '190 x 90 x 140 mm'
      },
      image: '/6-inch-fly-ash-bricks.webp'
    },
    {
      id: 6,
      category: 'Paver Blocks',
      name: 'Decorative Paver Blocks',
      size: 'Various Designs',
      description: 'Beautiful and durable paver blocks for driveways, walkways, and landscaping.',
      price: 25,
      unit: 'per sq ft',
      specifications: {
        compressiveStrength: '40 N/mm²',
        waterAbsorption: '< 6%',
        dimensions: 'Multiple sizes available'
      },
      image: '/paver-blocks.webp'
    }
  ];

  const addToCart = (product) => {
    const quantity = quantities[product.id] ? parseInt(quantities[product.id], 10) : 1;
    if (quantity < 1 || isNaN(quantity)) return;
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
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
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
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={e => updateCartQuantity(item.cartId, Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                            />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = 'none';
                    target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500">Image not available</div>';
                  }}
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <span className="text-orange-600 font-bold text-lg">
                    ₹{product.price} {product.unit}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Info className="h-4 w-4 text-orange-600" />
                    <span className="font-medium text-gray-900">Specifications:</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Strength: {product.specifications.compressiveStrength}</div>
                    <div>Water Absorption: {product.specifications.waterAbsorption}</div>
                    <div>Dimensions: {product.specifications.dimensions}</div>
                  </div>
                </div>
                {/* Quantity Input */}
                <div className="flex items-center space-x-2 mt-2">
                  <label htmlFor={`qty-${product.id}`} className="text-sm font-medium">Qty:</label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min="1"
                    value={quantities[product.id] || 0}
                    onChange={e => setQuantities({ ...quantities, [product.id]: e.target.value })}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 mt-2"
                >
                  <Package className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

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

export default Services;
