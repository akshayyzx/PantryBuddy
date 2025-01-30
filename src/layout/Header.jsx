import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

export const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollPosition = useRef(0); // Use ref instead of state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition.current && currentScrollPosition > 50) {
        setIsHeaderVisible(false); // Hide header when scrolling down
      } else {
        setIsHeaderVisible(true); // Show header when scrolling up
      }

      lastScrollPosition.current = currentScrollPosition; // Update ref
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo" className="logo-img" />
          <h1>PantryBuddy</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li onClick={() => handleNavClick("home")}>Home</li>
            <li onClick={() => handleNavClick("about")}>About</li>
            <li onClick={() => handleNavClick("products")}>Products</li>
            <li onClick={() => handleNavClick("contact")}>Contact</li>
          </ul>

          {/* FAQ Button */}
          <button id="faq-btn" onClick={() => handleNavClick("faq-section")}>FAQ</button>
        </nav>
      </div>
    </header>
  );
};
