import React from "react";
import { 
  Printer, 
  Layers, 
  Scissors, 
  Package, 
  FileText, 
  CheckCircle, 
  Settings, 
  Award,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  Lightbulb
} from "lucide-react";
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
        <section className="services-intro-section">
          <div className="services-intro-container">
            <div className="intro-badge">
              <Award className="intro-badge-icon" />
              <span>Complete Solutions</span>
            </div>
            <h2 className="services-intro-title">Our Capabilities</h2>
            <p className="services-intro-text">
              At <strong>Urmila Bhupathiraju Flexible Printers</strong>, every job
              is handled as a complete solution — from artwork and cylinder
              preparation to printing, lamination, slitting and pouch conversion.
              Our integrated setup helps you move faster to market, maintain
              consistent quality and keep your packaging supply chain simple.
            </p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="services-stats">
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <TrendingUp className="stat-icon" />
            </div>
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Users className="stat-icon" />
            </div>
            <h3 className="stat-number">200+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Zap className="stat-icon" />
            </div>
            <h3 className="stat-number">99%</h3>
            <p className="stat-label">On-Time Delivery</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Shield className="stat-icon" />
            </div>
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Quality Assured</p>
          </div>
        </section>

        {/* QUOTE BANNER */}
        <section className="services-quote-banner">
          <div className="quote-icon-wrap">
            <Target className="quote-icon" />
          </div>
          <p>
            We support brands of every size — from pilot runs to full-scale
            production — with the same focus on quality, speed and reliability.
          </p>
        </section>

        {/* SERVICE ROWS */}
        <section className="services-grid">
          {/* PRINTING */}
          <article className="service-card">
            <div className="service-card-image">
              <img
                src={assets.infra1}
                alt="Flexible packaging printing machine"
              />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Printer className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <div className="service-icon-wrap">
                  <Printer className="service-icon" />
                </div>
                <div className="service-header-text">
                  <span className="service-tag">Core Service</span>
                  <h3 className="service-title">High-Performance Printing</h3>
                </div>
              </div>
              <p className="service-description">
                Multi-color flexographic &amp; gravure printing on a range of
                substrates including BOPP, PET, PE and laminates. Optimised
                ink-matching and registration control ensures your brand colours
                stay consistent across every batch.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Surface &amp; reverse printing up to wide web widths</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Fine halftones, vignettes and photo-quality graphics</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Food-grade inks and coatings where required</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>In-line inspection for print defects and shade variation</span>
                </li>
              </ul>
            </div>
          </article>

          {/* LAMINATION */}
          <article className="service-card service-card-reverse">
            <div className="service-card-image">
              <img
                src={assets.servicesLam}
                alt="Lamination machine"
              />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Layers className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <div className="service-icon-wrap">
                  <Layers className="service-icon" />
                </div>
                <div className="service-header-text">
                  <span className="service-tag">Barrier &amp; Protection</span>
                  <h3 className="service-title">Coating &amp; Lamination</h3>
                </div>
              </div>
              <p className="service-description">
                Our lamination lines build structures that protect aroma, extend
                shelf life and improve handling. From simple duplex laminates to
                complex multi-layer constructions, we tune barrier properties to
                suit your product.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Solvent-less &amp; solvent-based lamination options</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Structures from 20 microns up to 200 microns</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>High bond strength &amp; excellent curl control</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Heat-seal, cold-seal &amp; speciality coating options</span>
                </li>
              </ul>
            </div>
          </article>

          {/* SLITTING */}
          <article className="service-card">
            <div className="service-card-image">
              <img
                src={assets.servicesSlit}
                alt="Slitting machine"
              />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Scissors className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <div className="service-icon-wrap">
                  <Scissors className="service-icon" />
                </div>
                <div className="service-header-text">
                  <span className="service-tag">Precision Finishing</span>
                  <h3 className="service-title">Web Slitting &amp; Rewinding</h3>
                </div>
              </div>
              <p className="service-description">
                Web-guided slitters with auto tension control deliver clean
                edges, accurate roll widths and consistent roll profiles that
                run smoothly on your packing lines.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Camera-based edge &amp; print mark tracking</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Custom slit widths for form-fill-seal &amp; VFFS machines</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Core &amp; roll OD as per your machine requirements</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Doctoring &amp; reworking of problem reels</span>
                </li>
              </ul>
            </div>
          </article>

          {/* POUCHING */}
          <article className="service-card service-card-reverse">
            <div className="service-card-image">
              <img
                src={assets.servicesPouch}
                alt="Pouching machine"
              />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Package className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <div className="service-icon-wrap">
                  <Package className="service-icon" />
                </div>
                <div className="service-header-text">
                  <span className="service-tag">Ready-to-Fill</span>
                  <h3 className="service-title">Pouch Conversion</h3>
                </div>
              </div>
              <p className="service-description">
                Dedicated pouching lines convert printed laminates into
                shelf-ready formats that are strong, leak-proof and visually
                striking on the rack.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Center-seal, three-side seal &amp; side-gusset pouches</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Stand-up pouches with zipper, spout &amp; tear notch options</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Heavy-duty bags designed up to 25&nbsp;kg fill weight</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Laser scoring, euro-hole and punch options on request</span>
                </li>
              </ul>
            </div>
          </article>

          {/* PREPRESS & SUPPORT */}
          <article className="service-card">
            <div className="service-card-image">
              <img
                src={assets.servicesConsult}
                alt="Design and prepress consultation"
              />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <FileText className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <div className="service-icon-wrap">
                  <FileText className="service-icon" />
                </div>
                <div className="service-header-text">
                  <span className="service-tag">Design Support</span>
                  <h3 className="service-title">Prepress &amp; Consulting</h3>
                </div>
              </div>
              <p className="service-description">
                We work closely with your marketing and procurement teams to
                translate design intent into packaging that is practical to
                produce and performs well in real-world conditions.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Artwork review, trapping &amp; colour-separation guidance</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Recommendations on substrates, thickness &amp; structure</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Pack format suggestions based on filling &amp; distribution</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Cost-to-performance optimisation for new launches</span>
                </li>
              </ul>
            </div>
          </article>
        </section>

        {/* SECOND QUOTE BANNER */}
        <section className="services-quote-banner services-quote-secondary">
          <div className="quote-icon-wrap">
            <Lightbulb className="quote-icon" />
          </div>
          <p>
            Choosing the right film, structure and format is as important as
            choosing the right design. Our team helps you get all three right.
          </p>
        </section>

        {/* EXPERTISE & CONSULTING - COMBINED SECTION */}
        <section className="services-value-section">
          <div className="value-section-header">
            <h2 className="value-section-title">Why Choose Us</h2>
            <div className="value-title-underline"></div>
          </div>

          <div className="value-grid">
            {/* EXPERTISE */}
            <div className="value-card">
              <div className="value-card-header">
                <Settings className="value-card-icon" />
                <h3 className="value-card-title">Our Expertise</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-bullet"></span>
                  <span>High-efficiency slitting machines with web guiding and camera tracking for critical jobs.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>High-speed multi-colour printing lines capable of handling wide webs and large repeat sizes.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Ability to run short pilot lots and scale quickly into full commercial production.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Capability to produce speciality pouches for snacks, pet food, agro, detergent and frozen products.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Experienced production &amp; QA teams with a strong customer-service mindset.</span>
                </li>
              </ul>
            </div>

            {/* CONSULTING */}
            <div className="value-card">
              <div className="value-card-header">
                <Lightbulb className="value-card-icon" />
                <h3 className="value-card-title">Consulting &amp; Support</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-bullet"></span>
                  <span>Guidance from initial idea to final pack — material selection, print approach and pack format.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Support on artwork layout, design balance and colour choices.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Suggestions on number of layers and barrier levels based on product shelf-life and filling conditions.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Advice on pouch sizes keeping in mind product density, volume and display requirements.</span>
                </li>
                <li>
                  <span className="value-bullet"></span>
                  <span>Ongoing technical support to improve line efficiency and reduce wastage on your packing machines.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}