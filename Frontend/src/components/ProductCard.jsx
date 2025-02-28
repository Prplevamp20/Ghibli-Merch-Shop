import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(false);

  const handleWishlistToggle = (event) => {
    event.stopPropagation(); // Prevents triggering card click
    setWishlist(!wishlist);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevents navigation on button click
    onAddToCart(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <button className="wishlist-btn" onClick={handleWishlistToggle}>
        {wishlist ? "❤️" : "🤍"}
      </button>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;
