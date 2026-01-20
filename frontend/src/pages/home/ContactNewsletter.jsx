import React, { useState } from "react";
import "../../styles/contactnewsletter.css";
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    // Placeholder for API call
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter-section scroll-effect">
      <div className="newsletter-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest developments, innovations, and updates
          from our packaging industry.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <FiMail className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            Subscribe <FiArrowRight className="arrow-icon" />
          </button>
        </form>
      </div>
    </section>
  );
}
