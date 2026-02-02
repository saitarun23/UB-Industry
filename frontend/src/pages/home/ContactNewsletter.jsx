import React, { useState } from "react";
import "../../styles/contactnewsletter.css";
import { FiMail, FiArrowRight, FiCheck } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || data?.message || "Subscription failed");
      }

      setStatus("success");
      setMessage("You’re subscribed! Check your email for confirmation.");
      setEmail("");

      // auto reset message
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Server error. Please try again.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-bg-pattern"></div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Badge */}
          <div className="newsletter-badge">
            <HiSparkles className="badge-icon" />
            <span>Stay Connected</span>
          </div>

          <h2 className="newsletter-title">Join Our Packaging Community</h2>

          <p className="newsletter-description">
            Get exclusive insights into flexible packaging innovations, industry
            trends, technical guides, and special offers delivered straight to
            your inbox.
          </p>

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

          {/* FORM */}
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
              />
            </div>

            <button
              type="submit"
              className={`subscribe-btn ${
                status === "success" ? "submitted" : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : status === "success" ? (
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

          {/* ✅ STATUS MESSAGE UI */}
          {message && (
            <div
              className={`newsletter-status ${
                status === "success"
                  ? "newsletter-status--success"
                  : "newsletter-status--error"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
