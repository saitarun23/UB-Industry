import React, { useState } from "react";
import assets from "../images";
import "../../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo + Text */}
        <div className="navbar-brand">
          <img src={assets.logo} alt="Urmistek Logo" />

          <div className="brand-text">
            <span className="brand-name">Urmila Bhupathiraju Industry</span>
            <span className="brand-industry">Flexible Printing Solutions</span>
          </div>
        </div>

        {/* Desktop / Tablet Navigation */}
        <nav className="navbar-menu">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#infrastructure">INFRASTRUCTURE</a>
          <a href="#whatsnew">WHAT'S NEW</a>
          <a href="#contact">CONTACT US</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <nav className={`navbar-menu-mobile ${menuOpen ? "is-open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>HOME</a>
        <a href="#about" onClick={handleLinkClick}>ABOUT US</a>
        <a href="#services" onClick={handleLinkClick}>SERVICES</a>
        <a href="#infrastructure" onClick={handleLinkClick}>INFRASTRUCTURE</a>
        <a href="#whatsnew" onClick={handleLinkClick}>WHAT'S NEW</a>
        <a href="#contact" onClick={handleLinkClick}>CONTACT US</a>
      </nav>
    </header>
  );
};

export default Navbar;
