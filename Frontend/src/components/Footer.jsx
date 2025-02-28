import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h2 className="footer-title">About Ghibli Merch Shop </h2>
          <p>
            Your one-stop shop for officially licensed Studio Ghibli merchandise.
            Explore collectibles, clothing, accessories, and home décor inspired by the magic of Ghibli.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            {["Bestsellers", "Shop by Movie", "Clothing", "Home & Décor", "Custom Orders", "Accessories"].map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: support@ghiblishop.com</p>
          <p>Phone: +1 234 567 890</p>

          {/* Social Media Icons Below Contact */}
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Bottom Image */}
        <div className="footer-image">
          <img src="/images/totoro.png" alt="Totoro" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Studio Ghibli Shop | Designed with 💙 for Ghibli Fans</p>
      </div>
    </footer>
  );
};

export default Footer;
