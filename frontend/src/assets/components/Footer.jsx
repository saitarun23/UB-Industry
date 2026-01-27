import React, { useState, useEffect } from "react";
import "../../styles/Footer.css";
import assets from "../images";

// Custom SVG Icons
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [activeLink, setActiveLink] = useState(null);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="footer-modern">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-grid">
          
          {/* Column 1: Company Info */}
          <div className="footer-column footer-about">
             <div className="footer-logo">
              <img src={assets.logo} alt="UB Industry Logo" className="footer-logo-img" />
              <div className="logo-text">
                <h2>UB Industries</h2>
                <span className="logo-tagline">Flexible Rotto Print & Pack Solutions</span>
              </div>
            </div>
            
            <p className="footer-description">
              Leading provider of innovative flexible packaging solutions since 2025. 
              We specialize in multi-layer, multi-color printing and laminations for 
              all your packaging needs.
            </p>

            {/* <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-wrapper">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    <ArrowRightIcon />
                  </button>
                </div>
              </form>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Quick Links
            </h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li 
                  key={index}
                  className={activeLink === index ? 'active' : ''}
                  onMouseEnter={() => setActiveLink(index)}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  <a href={link.path}>
                    <ChevronIcon />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Our Services
            </h3>
            <ul className="footer-links">
              <li><a href="#"><ChevronIcon /><span>Flexible Packaging</span></a></li>
              <li><a href="#"><ChevronIcon /><span>Multi-Color Printing</span></a></li>
              <li><a href="#"><ChevronIcon /><span>Lamination Services</span></a></li>
              <li><a href="#"><ChevronIcon /><span>Custom Pouches</span></a></li>
              <li><a href="#"><ChevronIcon /><span>Roll Form Solutions</span></a></li>
              <li><a href="#"><ChevronIcon /><span>Quality Assurance</span></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column footer-contact">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Get In Touch
            </h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-details">
                  <h5>Visit Us</h5>
                  <p>D-39 Road No 5 IDA Bheemunipatnam, Visakhapatnam - 500055</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-details">
                  <h5>Call Us</h5>
                  <p>+91 984 927 6508</p>
                  <p>+91 955 382 9879</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <EmailIcon />
                </div>
                <div className="contact-details">
                  <h5>Email Us</h5>
                  <p>Ubindustry@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <ClockIcon />
                </div>
                <div className="contact-details">
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 09:00 AM - 07:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>© 2026 <strong>Urmila Bhupathiraju Industry</strong>. All Rights Reserved.</p>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>

          <div className="footer-credit">
            <p>Designed by <strong>Urmistek</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
}