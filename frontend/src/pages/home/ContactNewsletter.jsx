import React, { useState } from "react";
import "../../styles/contactnewsletter.css";
import { FiMail, FiArrowRight, FiCheck } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    // Placeholder for API call
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-bg-pattern"></div>
      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Icon Badge */}
          <div className="newsletter-badge">
            <HiSparkles className="badge-icon" />
            <span>Stay Connected</span>
          </div>

          {/* Heading */}
          <h2 className="newsletter-title">
            Join Our Packaging Community
          </h2>
          
          {/* Description */}
          <p className="newsletter-description">
            Get exclusive insights into flexible packaging innovations, industry trends, 
            technical guides, and special offers delivered straight to your inbox.
          </p>

          {/* Features List */}
          <div className="newsletter-features">
            <div className="feature-item">
              <FiCheck className="feature-check" />
              <span>Industry News & Updates</span>
            </div>
            <div className="feature-item">
              <FiCheck className="feature-check" />
              <span>Technical Resources</span>
            </div>
            <div className="feature-item">
              <FiCheck className="feature-check" />
              <span>Exclusive Promotions</span>
            </div>
          </div>

          {/* Form */}
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitted}
              />
            </div>
            <button 
              type="submit" 
              className={`subscribe-btn ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <FiCheck className="btn-icon" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe Now
                  <FiArrowRight className="btn-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}