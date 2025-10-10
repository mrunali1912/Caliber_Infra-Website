// src/components/ProductCard.jsx
import React from "react";
import { Package } from "lucide-react";

const ProductCard = ({ product, isInCart, addToCart, setSelectedProduct, setSelectedImageIndex, setShowImagePopup }) => {
  
  return (
    <div
      key={product.id}
      className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="h-64 overflow-hidden bg-gray-100">
        <img
          src={product.images ? product.images[0] : product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => {
            setSelectedProduct(product);
            setSelectedImageIndex(0);
            setShowImagePopup(true);
          }}
          onError={(e) => {
            const target = e.target;
            target.style.display = "none";
            target.parentElement.innerHTML =
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
          <p className="text-gray-600 text-xs leading-snug">{product.description}</p>
        </div>

        {/* Specs + Add to Cart */}
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <div className="space-y-0.5">
            <div>Strength: {product.specifications.compressiveStrength}</div>
            <div>Water Absorption: {product.specifications.waterAbsorption}</div>
            <div>Dimensions: {product.specifications.dimensions}</div>
          </div>

          <button
    onClick={() => addToCart(product)}
    className={`ml-4 py-2 px-3 rounded-lg font-medium flex items-center justify-center space-x-1 transition-colors self-end ${
      isInCart
        ? "bg-green-600 text-white cursor-default"
        : "bg-orange-600 text-white hover:bg-orange-700"
    }`}
    disabled={isInCart}
  >
    <Package className="h-4 w-4" />
    <span className="text-sm">{isInCart ? "Added to Cart" : "Add to Cart"}</span>
  </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
