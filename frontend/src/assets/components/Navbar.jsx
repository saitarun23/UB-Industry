import React from "react";
import assets from "../images";
import "../styles/navbar.css";

const Navbar = () => {
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

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#infrastructure">INFRASTRUCTURE</a>
          <a href="#whatsnew">WHAT'S NEW</a>
          <a href="#contact">CONTACT US</a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
