import React from "react";
import assets from "../../assets/images"; // make sure contactHero exists or falls back correctly
import "../../styles/contact.css";

export default function Contact() {
  return (
    <main className="contact-page" id="contact">
      {/* HERO */}
      <header className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src={ assets.contacthero }
            alt="Customer support"
          />
        </div>
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            We&apos;re here to help with your next print or packaging project.
            Reach out to us for quotes, queries, or collaboration.
          </p>
        </div>
      </header>

      {/* MAIN – CENTERED FORM */}
      <section className="contact-main scroll-effect">
        <section className="contact-form-card">
          <div className="contact-form-header">
            <button className="contact-tab contact-tab--active contact-header-button">
              <span className="contact-tab-icon">✉</span>
              <span className="contact-tab-label">Contact Us</span>
            </button>

            <p className="contact-form-text">
              If you&apos;re looking to start a project or just have a question
              for the team, let us know by filling out the form below.
            </p>
          </div>

          <form className="contact-form">
            {/* First / Last name */}
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="firstName">First name *</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="lastName">Last name *</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Email / Company */}
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  required
                />
              </div>
            </div>

            {/* Phone / Country */}
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="country">Country *</label>
                <select id="country" defaultValue="India">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Europe</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="contact-field contact-field--full">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your requirement"
                required
              />
            </div>

            {/* Submit */}
            <div className="contact-actions">
              <button type="submit" className="contact-submit">
                Send
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map-section ">
        <div className="contact-map-inner">
          <h3 className="contact-map-title">Visit us</h3>
          <p className="contact-map-text">
            You&apos;ll find our plant and office located in Visakhapatnam. Use the
            map below to get directions.
          </p>

          <div className="contact-map-card">
            {/* Replace src with your actual Google Maps embed url */}
            <iframe
              title="Company location"
              src="https://www.google.com/maps/embed?pb="
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
