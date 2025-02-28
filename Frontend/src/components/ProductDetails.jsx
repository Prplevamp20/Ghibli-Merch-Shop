import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart 🛒</button>
    </div>
  );
}

export default ProductDetails;
