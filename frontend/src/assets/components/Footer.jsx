import React from "react";
import "../../styles/footer.css";
import { FiArrowRight, FiMapPin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaRegSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-section scroll-effect">
      <div className="footer-container  scroll-effect">
        
        {/* Column 1: About Company */}
        <div className="footer-col">
          <h3 className="footer-title">About Company</h3>
          <div className="zigzag-line"></div>
          <p className="about-text">
            Urmila Bhupathiraju Industry. was begun on 2025 with full certainty and energy.
          </p>
          <p className="about-text">
            Urmila Bhupathiraju Industry. caters for all kinds of flexible packaging material in 
            either roll form or pouch form and these are offered in multi-layer, multi-color 
            printing and lamination's.
          </p>
          <a href="/about" className="more-about">
            More About Us <FiArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick links</h3>
          <div className="zigzag-line"></div>
          <ul className="quick-links">
            <li><FaRegSquare className="link-icon" /> Home</li>
            <li><FaRegSquare className="link-icon" /> About Us</li>
            <li><FaRegSquare className="link-icon" /> Services</li>
            <li><FaRegSquare className="link-icon" /> Infrastructure</li>
            <li><FaRegSquare className="link-icon" /> What's New</li>
            <li><FaRegSquare className="link-icon" /> Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Address & Contact */}
        <div className="footer-col">
          <h3 className="footer-title">Address, Contact Our Team</h3>
          <div className="zigzag-line"></div>
          
          <div className="contact-grid">
            <div className="address-box">
              <div className="location-header">
                <FiMapPin className="map-pin" />
                <div>
                  <strong>Our Branch</strong>
                </div>
              </div>
              <p>D-39 Road No 5 IDA Bheemunipatnam, Visakhapatnam - 500055</p>
            </div>

            <div className="details-box">
              <div className="contact-item">
                <strong>Mobile:</strong>
                <span>+91 984 927 6508</span>
                <span>+91 955 382 9879</span>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <span>Ubindustry@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Mon-Sat:</strong>
                <span>09.00am to 07.00pm</span>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FiInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p> © 2026 All Rights Reserved by Urmila Bhupathiraju Industry.</p>
          <p>Design and maintained by <strong>Urmistek</strong></p>
        </div>
      </div>
    </footer>
  );
}