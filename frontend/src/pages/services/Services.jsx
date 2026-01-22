import React from "react";
import assets from "../../assets/images";
import "../../styles/services.css";

export default function Services() {
  return (
    <main className="services-page" id="services">
      {/* HERO */}
      <header className="services-hero">
        <div className="services-hero-bg">
          <img src={assets.servicesHero} alt="Production floor" />
        </div>
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <h1 className="services-hero-title">Services</h1>
          <p className="services-hero-subtitle">
            End-to-end flexible printing and converting under one roof.
          </p>
        </div>
      </header>

      {/* MAIN BODY */}
      <section className="services-main">
        {/* CAPABILITIES INTRO */}
        <section className="services-intro">
          <h2 className="services-intro-title">Our Capabilities</h2>
          <p className="services-intro-text">
            At <strong>Urmila Bhupathiraju Flexible Printers</strong>, every job
            is handled as a complete solution — from artwork and cylinder
            preparation to printing, lamination, slitting and pouch conversion.
            Our integrated setup helps you move faster to market, maintain
            consistent quality and keep your packaging supply chain simple.
          </p>
        </section>

        {/* QUOTE BANNER */}
        <section className="services-quote-banner">
          <p>
            “We support brands of every size — from pilot runs to full-scale
            production — with the same focus on quality, speed and reliability.”
          </p>
        </section>

        {/* SERVICE ROWS */}
        <section className="services-grid">
          {/* PRINTING */}
          <article className="service-row">
            <div className="service-row-image">
              <img
                src={assets.infra1}
                alt="Flexible packaging printing machine"
              />
            </div>
            <div className="service-row-content">
              <span className="service-tag">Core Service</span>
              <h3 className="service-row-title">High-Performance Printing</h3>
              <p className="service-row-text">
                Multi-color flexographic &amp; gravure printing on a range of
                substrates including BOPP, PET, PE and laminates. Optimised
                ink-matching and registration control ensures your brand colours
                stay consistent across every batch.
              </p>
              <ul className="service-row-list">
                <li>Surface &amp; reverse printing up to wide web widths</li>
                <li>Fine halftones, vignettes and photo-quality graphics</li>
                <li>Food-grade inks and coatings where required</li>
                <li>In-line inspection for print defects and shade variation</li>
              </ul>
            </div>
          </article>

          {/* LAMINATION */}
          <article className="service-row">
            <div className="service-row-image">
              <img
                src={assets.servicesLam}
                alt="Lamination machine"
              />
            </div>
            <div className="service-row-content">
              <span className="service-tag">Barrier &amp; Protection</span>
              <h3 className="service-row-title">Coating &amp; Lamination</h3>
              <p className="service-row-text">
                Our lamination lines build structures that protect aroma, extend
                shelf life and improve handling. From simple duplex laminates to
                complex multi-layer constructions, we tune barrier properties to
                suit your product.
              </p>
              <ul className="service-row-list">
                <li>Solvent-less &amp; solvent-based lamination options</li>
                <li>Structures from 20 microns up to 200 microns</li>
                <li>High bond strength &amp; excellent curl control</li>
                <li>Heat-seal, cold-seal &amp; speciality coating options</li>
              </ul>
            </div>
          </article>

          {/* SLITTING */}
          <article className="service-row">
            <div className="service-row-image">
              <img
                src={assets.servicesSlit}
                alt="Slitting machine"
              />
            </div>
            <div className="service-row-content">
              <span className="service-tag">Precision Finishing</span>
              <h3 className="service-row-title">Web Slitting &amp; Rewinding</h3>
              <p className="service-row-text">
                Web-guided slitters with auto tension control deliver clean
                edges, accurate roll widths and consistent roll profiles that
                run smoothly on your packing lines.
              </p>
              <ul className="service-row-list">
                <li>Camera-based edge &amp; print mark tracking</li>
                <li>Custom slit widths for form-fill-seal &amp; VFFS machines</li>
                <li>Core &amp; roll OD as per your machine requirements</li>
                <li>Doctoring &amp; reworking of problem reels</li>
              </ul>
            </div>
          </article>

          {/* POUCHING */}
          <article className="service-row">
            <div className="service-row-image">
              <img
                src={assets.servicesPouch}
                alt="Pouching machine"
              />
            </div>
            <div className="service-row-content">
              <span className="service-tag">Ready-to-Fill</span>
              <h3 className="service-row-title">Pouch Conversion</h3>
              <p className="service-row-text">
                Dedicated pouching lines convert printed laminates into
                shelf-ready formats that are strong, leak-proof and visually
                striking on the rack.
              </p>
              <ul className="service-row-list">
                <li>Center-seal, three-side seal &amp; side-gusset pouches</li>
                <li>Stand-up pouches with zipper, spout &amp; tear notch options</li>
                <li>Heavy-duty bags designed up to 25&nbsp;kg fill weight</li>
                <li>Laser scoring, euro-hole and punch options on request</li>
              </ul>
            </div>
          </article>

          {/* EXTRA: PREPRESS & SUPPORT */}
          <article className="service-row">
            <div className="service-row-image">
              <img
                src={assets.servicesConsult}
                alt="Design and prepress consultation"
              />
            </div>
            <div className="service-row-content">
              <span className="service-tag">Design Support</span>
              <h3 className="service-row-title">Prepress &amp; Consulting</h3>
              <p className="service-row-text">
                We work closely with your marketing and procurement teams to
                translate design intent into packaging that is practical to
                produce and performs well in real-world conditions.
              </p>
              <ul className="service-row-list">
                <li>Artwork review, trapping &amp; colour-separation guidance</li>
                <li>Recommendations on substrates, thickness &amp; structure</li>
                <li>Pack format suggestions based on filling &amp; distribution</li>
                <li>Cost-to-performance optimisation for new launches</li>
              </ul>
            </div>
          </article>
        </section>

        {/* SECOND QUOTE BANNER */}
        <section className="services-quote-banner services-quote-banner--secondary">
          <p>
            “Choosing the right film, structure and format is as important as
            choosing the right design. Our team helps you get all three right.”
          </p>
        </section>

        {/* EXPERTISE LIST */}
        <section className="services-expertise">
          <h2 className="services-section-title">Our Expertise</h2>
          <ul className="services-bullet-list">
            <li>
              High-efficiency slitting machines with web guiding and camera
              tracking for critical jobs.
            </li>
            <li>
              High-speed multi-colour printing lines capable of handling wide
              webs and large repeat sizes.
            </li>
            <li>
              Ability to run short pilot lots and scale quickly into full
              commercial production.
            </li>
            <li>
              Capability to produce speciality pouches for snacks, pet food,
              agro, detergent and frozen products.
            </li>
            <li>
              Experienced production &amp; QA teams with a strong customer-
              service mindset.
            </li>
          </ul>
        </section>

        {/* CONSULTING / VALUE ADDED */}
        <section className="services-consulting">
          <h2 className="services-section-title">Consulting &amp; Support</h2>
          <ul className="services-bullet-list">
            <li>
              Guidance from initial idea to final pack — material selection,
              print approach and pack format.
            </li>
            <li>Support on artwork layout, design balance and colour choices.</li>
            <li>
              Suggestions on number of layers and barrier levels based on
              product shelf-life and filling conditions.
            </li>
            <li>
              Advice on pouch sizes keeping in mind product density, volume and
              display requirements.
            </li>
            <li>
              Ongoing technical support to improve line efficiency and reduce
              wastage on your packing machines.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
