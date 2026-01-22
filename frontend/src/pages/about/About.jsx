import React from "react";
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
        <h2 className="about-welcome-title">
          Welcome to Urmila Bhupathiraju Flexible Printers
        </h2>
      </section>

      {/* MAIN BODY */}
      <section className="about-main">
        {/* IMAGE + TEXT (ONE CARD) */}
        <section className="about-card about-company-card">
          <div className="about-company-image-wrap">
            <img
              src={assets.infraHero}
              alt="Manufacturing facility"
              className="about-company-image"
            />
          </div>

          <div className="about-company-text">
            <div className="about-text-block">
              <h2 className="about-section-heading">Who we are</h2>

              <p className="about-paragraph">
                <strong>Urmila Bhupathiraju Industry</strong> is a flexible
                printing and packaging company based in Visakhapatnam, India.
                With a strong foundation in high-quality flexible materials, we
                are committed to delivering reliable, high-performance printing
                solutions.
              </p>

              <p className="about-paragraph">
                Over the years, our facilities have expanded with advanced
                presses, laminators and finishing lines to meet the increasing
                demand for capacity and technical complexity. Today, we handle
                a wide mix of substrates, multilayer structures and print
                volumes while ensuring consistency and on-time supply.
              </p>

              <p className="about-paragraph">
                Every reel that leaves our factory follows strict hygiene,
                safety and compliance protocols—ensuring both functional
                performance and strong brand presentation.
              </p>

              <div className="about-mission-vision">
                <div className="about-mission">
                  <h3>Mission</h3>
                  <p className="about-paragraph">
                    To consistently deliver flexible packaging solutions that
                    exceed customer expectations, backed by innovation, quality
                    and reliability.
                  </p>
                </div>

                <div className="about-vision">
                  <h3>Vision</h3>
                  <p className="about-paragraph">
                    To become India’s trusted partner in flexible printing,
                    known for premium quality, responsive service and
                    world-class technical capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR CARD */}
        <section className="about-card about-director-card">
          <div className="about-director-inner">
            <div className="about-director-avatar-wrap">
              <img
                src={assets.aboutDirector}
                alt="Managing Director"
                className="about-director-avatar"
              />
            </div>

            <h3 className="about-director-name">Urmila Bhupathiraju</h3>
            <p className="about-director-role">Managing Director</p>

            <div className="about-director-divider" />

            <p className="about-director-text">
              Under the leadership of Urmila Bhupathiraju, the company has
              emerged as a powerhouse of innovation in the flexible printing
              industry. Her tenure has been marked by a transition toward
              smarter manufacturing and a relentless pursuit of perfection. By
              balancing disciplined management with a creative outlook, she has
              built a brand that stands for both reliability and aesthetic
              brilliance in packaging.
            </p>

            <p className="about-director-text">
              Urmila’s approach to the industry is deeply rooted in hands-on
              experience. She is known for her involvement in the technical
              nuances of the production floor, ensuring that the precision of
              every print run aligns with the client’s brand identity. This
              technical intimacy allows her to lead with a unique authority,
              bridging the gap between high-level strategy and day-to-day
              operations.
            </p>

            <p className="about-director-text">
              Customer satisfaction is the primary compass by which Urmila
              steers the organization. She has implemented a consultative
              service model where the team spends time understanding the
              shelf-life and durability needs of each product. This dedication
              to understanding the “why” behind the packaging has resulted in an
              industry-leading rate of client retention.
            </p>

            <p className="about-director-text">
              Today, the company stands as a reflection of Urmila’s dedication
              to excellence. Her ability to manage growth while maintaining a
              personal touch has created a scalable business that remains agile
              and responsive, with a focus on empowering people and leveraging
              technology to redefine printing standards.
            </p>
          </div>
        </section>

        {/* HISTORY – NEW SPLIT LAYOUT */}
        <section className="about-history">
          <div className="about-history-inner">
            <div className="about-history-heading">
              <h2 className="about-history-title">Our History</h2>
              {/* <p className="about-history-intro">
                Built over years of close customer relationships, our story is
                about listening carefully, improving continuously and delivering
                packaging that works in the real world.
              </p> */}
            </div>

            <div className="about-history-layout">
              {/* left image */}
              <div className="about-history-image-wrap">
                <img
                  src={ assets.infraHero}
                  alt="Early days of the company"
                  className="about-history-image"
                />
              </div>

              {/* right card */}
              <article className="about-history-card">
                <h3 className="about-history-subtitle">
                  Where our journey took shape
                </h3>
                <p className="about-history-body">
                  From the beginning, our focus has been simple—understand what
                  each customer truly needs, and build packaging that supports
                  their business for the long term.
                </p>

                <ul className="about-history-list">
                  <li>
                    Your satisfaction is our benchmark. We don’t just take
                    orders; we dive deep into your requirements to design
                    solutions that align with your brand goals.
                  </li>
                  <li>
                    We take immense pride in rigorous quality control. By using
                    only genuine, high-grade materials, every product leaving
                    our facility meets demanding industry standards.
                  </li>
                  <li>
                    We bridge the gap between printing technology and your
                    vision. Our team invests time in explaining options so the
                    final pack looks and performs exactly as you expect.
                  </li>
                  <li>
                    In a fast-moving market, timing is everything. We strive for
                    accuracy in production and logistics to ensure reliable,
                    on-time delivery.
                  </li>
                  <li>
                    We see our clients as long-term partners. Our growth is
                    driven by the trust and loyalty of customers who return to
                    us project after project.
                  </li>
                </ul>
              </article>
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
