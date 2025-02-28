import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ImageCarousel from "./components/ImageCarousel";
import SwiperComponent from "./components/Swiper";
import About from "./components/About";
import Footer from "./components/Footer";
import customizeImage from "./assets/CUSTOMIZE.jpg"; // ✅ Import Image
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data.slice(0, 5)); // ✅ Ensures only top 5 products are fetched
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <ImageCarousel />

      <Outlet />

      {/* ✅ Product Listings Section */}
      <div className="products-section">
        <h2 className="new-arrivals-heading">New Arrivals</h2>
        <div className="products-container">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={{
                  name: product.productName,
                  price: product.price,
                  image: product.imageURL,
                }}
              />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>

      <SwiperComponent />
      <div className="full-width-image-container">
  <button className="customize-button">Customize Now</button>
  <img src={customizeImage} alt="Customized Merch" className="full-width-image" />
</div>



      <About />
      <Footer />
    </div>
  );
}

export default App;
