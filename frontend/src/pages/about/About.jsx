import React from "react";
import { FaBox, FaCheck, FaBolt, FaCrosshairs, FaRocket, FaBullseye } from "react-icons/fa6";
import assets from "../../assets/images";
import "../../styles/about.css";

export default function About() {
  return (
    <main className="about-page" id="about">
      {/* HERO */}
      <header className="about-hero">
        <div className="about-hero-bg">
          <img src={assets.aboutHero} alt="Team at work" />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </header>

      {/* WELCOME HEADING */}
      <section className="about-welcome">
        <div className="about-welcome-content">
          <h2 className="about-welcome-title">
            Welcome to Urmila Bhupathiraju Industries
          </h2>
          <p className="about-welcome-subtitle">
            Excellence in Flexible Printing & Packaging Solutions Since Day One
          </p>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="about-main">
        {/* WHO WE ARE */}
        <section className="about-company-section">
          <div className="about-company-content">
            <div className="about-company-header">
              <h2 className="about-section-title">Who We Are</h2>
              <div className="about-title-underline"></div>
            </div>

            <div className="about-company-grid">
              <div className="about-company-image-container">
                <div className="about-company-image-wrap">
                  <img
                    src={assets.aboutwe}
                    alt="Manufacturing facility"
                    className="about-company-image"
                  />
                </div>
                {/* <div className="about-image-badge">
                  <span className="badge-text">State-of-the-art Facility</span>
                </div> */}
              </div>

              <div className="about-company-text">
                <p className="about-intro-text">
                  <strong>Urmila Bhupathiraju Industries</strong> is a flexible
                  printing and packaging company based in Visakhapatnam, India.
                  With a strong foundation in high-quality flexible materials, we
                  are committed to delivering reliable, high-performance printing
                  solutions.
                </p>

                <div className="about-features-grid">
                  {/* Advanced Infrastructure */}
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBox /></div>
                    <h4>Advanced Infrastructure</h4>
                    <p>
                      Equipped with cutting-edge presses, laminators and finishing
                      lines to handle complex multilayer structures.
                    </p>
                  </div>

                  {/* Quality Assurance */}
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaCheck /></div>
                    <h4>Quality Assurance</h4>
                    <p>
                      Strict hygiene, safety and compliance protocols ensure
                      consistent performance and brand presentation.
                    </p>
                  </div>

                  {/* On-Time Delivery */}
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBolt /></div>
                    <h4>On-Time Delivery</h4>
                    <p>
                      Wide substrate mix and print volume capacity with
                      guaranteed consistency and timely supply.
                    </p>
                  </div>

                  {/* Technical Excellence */}
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBullseye /></div>
                    <h4>Technical Excellence</h4>
                    <p>
                      Every reel follows rigorous quality control to ensure
                      functional performance meets expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MISSION & VISION */}
            {/* <div className="about-mission-vision-section">
              <div className="mission-vision-card mission-card">
                <div className="card-icon-wrap">
                  <div className="card-icon"><FaCrosshairs /></div>
                </div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To consistently deliver flexible packaging solutions that
                  exceed customer expectations, backed by innovation, quality
                  and reliability.
                </p>
              </div>
              <div className="mission-vision-card vision-card">
                <div className="card-icon-wrap">
                  <div className="card-icon"><FaRocket /></div>
                </div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  To become India's trusted partner in flexible printing,
                  known for premium quality, responsive service and
                  world-class technical capability.
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* DIRECTOR SECTION */}
        <section className="about-director-section">
          <div className="about-director-container">
            <div className="about-director-header">
              <h2 className="about-section-title">Leadership</h2>
              <div className="about-title-underline"></div>
            </div>

            <div className="about-director-content">
              <div className="about-director-left">
                <div className="about-director-avatar-wrap">
                  <img
                    src={assets.aboutDirector}
                    alt="Managing Director"
                    className="about-director-avatar"
                  />
                  <div className="avatar-ring"></div>
                </div>
                <h3 className="about-director-name">Urmila Bhupathiraju</h3>
                <p className="about-director-role">Managing Director</p>

                {/* <div className="director-stats">
                  <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                </div> */}
              </div>

              <div className="about-director-right">
                <div className="director-quote">
                  <span className="quote-mark">"</span>
                  <p>
                    Excellence is not just a goal—it's our standard. Every print,
                    every package, every delivery reflects our commitment to
                    perfection.
                  </p>
                </div>

                <div className="director-bio">
                  <p>
                    Under the leadership of Urmila Bhupathiraju, the company has
                    emerged as a powerhouse of innovation in the flexible printing
                    industry. Her tenure has been marked by a transition toward
                    smarter manufacturing and a relentless pursuit of perfection.
                  </p>

                  <p>
                    Urmila's approach is deeply rooted in hands-on experience. She
                    is known for her involvement in the technical aspects of the
                    production floor, ensuring that the precision of every print
                    run aligns with the client's brand identity.
                  </p>

                  <p>
                    Customer satisfaction is the primary compass by which Urmila
                    steers the organization. Her consultative service model focuses
                    on understanding shelf-life and durability needs, resulting in
                    industry-leading client retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORY SECTION */}
        
<section className="about-history-section">
  <div className="about-history-container">
    <div className="about-history-header">
      <h2 className="about-section-title">Our Journey</h2>
      <div className="about-title-underline"></div>
      <p className="about-history-intro">
        Built on trust, driven by excellence, sustained by customer relationships
      </p>
    </div>

    <div className="about-history-content">
      <div className="history-image-side">
        <div className="history-image-wrap">
          <img
            src={assets.aboutjourney}
            alt="Company journey"
            className="history-image"
          />
        </div>
      </div>

      <div className="history-text-side">
        <h3 className="history-subtitle">Where Our Journey Took Shape</h3>     
        <p className="history-description">
          From the beginning, our focus has been simple—understand what
          each customer truly needs, and build packaging that supports
          their business for the long term.
        </p>

        <div className="history-principles">
          <div className="principle-item">
            <div className="principle-number">01</div>
            <div className="principle-content">
              <h4>The Vision Begins</h4>
              <p>
                Founded in 2025, Urmila BhupathiRaju Industries was born
                from a passion to bring quality packaging solutions to businesses
                of all sizes across the region.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-number">02</div>
            <div className="principle-content">
              <h4>Building the Foundation</h4>
              <p>
                From day one, we invested in the best machinery, sourced only
                high-grade materials, and assembled a skilled team dedicated to
                delivering excellence in every order.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-number">03</div>
            <div className="principle-content">
              <h4>Earning Customer Trust</h4>
              <p>
                Within our first months of operation, we built strong relationships
                with clients by consistently delivering quality work on time and
                understanding their unique packaging needs.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-number">04</div>
            <div className="principle-content">
              <h4>Expanding Our Reach</h4>
              <p>
                As word spread about our commitment to quality and service, our
                client base grew steadily — serving businesses from small startups
                to large-scale enterprises.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-number">05</div>
            <div className="principle-content">
              <h4>The Road Ahead</h4>
              <p>
                Today, we look ahead with confidence. Our goal is to keep growing,
                keep innovating, and continue being the most reliable packaging
                partner for every business we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">About Us</h2>
          <p className="about-cta-text">
            Get in touch to learn how we can support your flexible packaging
            needs.
          </p>
        </div>
      </section>
    </main>
  );
}
