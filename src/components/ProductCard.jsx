import React, { useState } from "react";
import { Info, Package } from "lucide-react";

const ProductCard = ({ product, addToCart, onImageClick }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // optional revert
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Image */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={product.images ? product.images[0] : product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => onImageClick(product, 0)}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML =
              '<div class="w-full h-full flex items-center justify-center text-gray-500">Image not available</div>';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
          <span className="text-orange-600 font-bold text-base">
            ₹{product.price} {product.unit}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-xs leading-tight">{product.description}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <Info className="h-3 w-3 text-orange-600" />
            <span className="font-medium text-gray-900 text-sm">Specifications:</span>
          </div>
          <div className="text-xs text-gray-600 space-y-0.5">
            <div>Strength: {product.specifications.compressiveStrength}</div>
            <div>Water Absorption: {product.specifications.waterAbsorption}</div>
            <div>Dimensions: {product.specifications.dimensions}</div>
          </div>
        </div>

        {/* Add to Cart button inline with price at bottom-left */}
        <div className="flex justify-start mt-2">
          <button
            onClick={handleAddToCart}
            className="bg-orange-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center space-x-1"
          >
            <Package className="h-4 w-4" />
            <span>{added ? "Added" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
