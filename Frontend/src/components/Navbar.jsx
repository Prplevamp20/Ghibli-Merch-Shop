import React, { useState, useEffect } from "react";
import { FaSearch, FaStore, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Maya.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
        <FaStore className="shop-icon" /> 
        <span>Ghibli Merch </span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">Bestsellers</a></li>
          <li>
            <a href="#">Shop By Movie</a>
            <ul className="dropdown-menu">
              <li><a href="#">My Neighbor Totoro</a></li>
              <li><a href="#">Spirited Away</a></li>
              <li><a href="#">Princess Mononoke</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Clothing</a>
            <ul className="dropdown-menu">
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Hoodies</a></li>
              <li><a href="#">Jackets</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Home & Decor</a>
            <ul className="dropdown-menu">
              <li><a href="#">Posters</a></li>
              <li><a href="#">Mugs</a></li>
              <li><a href="#">Wall Art</a></li>
            </ul>
          </li>
          <li><a href="#">Custom</a></li>
          <li>
            <a href="#">Accessories</a>
            <ul className="dropdown-menu">
              <li><a href="#">Bags</a></li>
              <li><a href="#">Hats</a></li>
              <li><a href="#">Keychains</a></li>
            </ul>
          </li>
        </ul>

        {/* Right Section: Search, Profile, Cart */}
        <div className="right-section">
          <div className="search-container">
            <input type="text" placeholder="Search for" className="search-input" />
            <FaSearch className="search-icon" />
          </div>
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
