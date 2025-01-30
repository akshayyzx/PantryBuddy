import React from "react";
import "../styles/Footer.css"; // Import the CSS file for styling
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <div className="logoo">
          <img className="logo" src={logo} alt="Logo" /> {/* Replace with your logo path */}
        </div>
        <p>© 2025 PantryBuddy, Inc.<br />All rights reserved.</p>
      </div>

      <div className="footer-section links-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section explore-section">
        <h4>Explore More</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>

      <div className="footer-section connect-section">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
