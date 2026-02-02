import {
  Printer,
  Layers,
  Scissors,
  Package,
  FileText,
  CheckCircle,
  Settings,
  Award,
  Target,
  Lightbulb,
  Sprout,
  Milk,
  Droplet,
  HeartPulse,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";
import FoodPacketIcon from "../../assets/components/icons/FoodPacketIcon";

import assets from "../../assets/images";
import "../../styles/services.css";

const packagingSolutions = [
  {
    title: "Food Packaging",
    desc:
      "Solutions suitable for nitrogen flushing, good moisture and oxygen barrier with matt, gloss and metallic finishes.",
    Icon: FoodPacketIcon,
    variant: "food",
  },
  {
    title: "Agriculture Packaging",
    desc:
      "Structures tailored for agricultural products with reliable barrier and mechanical strength for rural distribution.",
    Icon: Sprout,
    variant: "agri",
  },
  {
    title: "Milk Products Packaging",
    desc:
      "Laminates and pouches for milk and dairy products, maintaining hygiene, freshness and reliable distribution.",
    Icon: Milk,
    variant: "beverage",
  },
  {
    title: "Industrial Packaging",
    desc:
      "High-performance industrial laminates engineered for demanding environments and heavy products.",
    Icon: Layers,
    variant: "industrial",
  },
  {
    title: "Liquid Packaging",
    desc:
      "Leak-proof laminates and pouches for edible oils, cleaners and other liquid products.",
    Icon: Droplet,
    variant: "liquid",
  },
  {
    title: "Healthcare Packaging",
    desc:
      "Packaging suitable for pharma and healthcare products with high hygiene and protection needs.",
    Icon: HeartPulse,
    variant: "health",
  },
];

const whyChooseUsFeatures = [
  {
    icon: Zap,
    title: "State-of-the-Art Technology",
    description:
      "High-speed multi-colour printing lines with web guiding and camera tracking for precision and quality.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous QA processes with in-line inspection systems ensuring consistent quality across every batch.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced production and technical teams with deep knowledge in flexible packaging solutions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Production",
    description:
      "From pilot runs to full-scale commercial production with quick turnaround and consistent output.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Efficient workflows and integrated processes ensure your packaging reaches market faster.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description:
      "Tailored packaging solutions designed specifically for your product requirements and market needs.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

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
          <h1 className="services-hero-title scroll-effect">Our Services</h1>
          <p className="services-hero-subtitle scroll-effect">
            End-to-end flexible printing and converting under one roof.
          </p>
        </div>
      </header>

      {/* MAIN BODY */}
      <section className="services-main">
        {/* CAPABILITIES INTRO */}
        <section className="services-intro-section">
          <div className="services-intro-container">
            <div className="intro-badge services-badge">
              <Award className="intro-badge-icon" />
              <span>Complete Solutions</span>
            </div>
            <h2 className="services-intro-title scroll-effect">Our Capabilities</h2>
            <p className="services-intro-text scroll-effect">
              At <strong>UB Industries</strong>, every
              job is handled as a complete solution — from artwork and cylinder
              preparation to printing, lamination, slitting and pouch
              conversion. Our integrated setup helps you move faster to market,
              maintain consistent quality and keep your packaging supply chain
              simple.
            </p>
          </div>
        </section>

        {/* PACKAGING SOLUTIONS */}
        <section className="packaging-section">
          <div className="packaging-header">
            <h2 className="packaging-title scroll-effect">Packaging Solutions</h2>
            <p className="packaging-subtitle scroll-effect">
              Application-focused flexible packaging for different product
              categories.
            </p>
          </div>

          <div className="packaging-grid">  
            {packagingSolutions.map(({ title, desc, Icon, variant }) => (
              <div className="pack-card scroll-effect" key={title}>
                <div className={`pack-icon-circle pack-${variant}`}>
                  <Icon className="pack-icon" />
                </div>
                <h3 className="pack-card-title scroll-effect">{title}</h3>
                <p className="pack-card-text scroll-effect">{desc}</p>
              </div>
            ))}
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
            <div className="service-card-image scroll-effect">
              <img
                src={assets.service1}
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
                <span className="service-tag">Core Service</span>
                <h3 className="service-title">High-Performance Printing</h3>
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
                  <span>
                    Surface &amp; reverse printing up to wide web widths
                  </span>
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
                  <span>
                    In-line inspection for print defects and shade variation
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* LAMINATION */}
          <article className="service-card service-card-reverse">
            <div className="service-card-image">
              <img src={assets.service2} alt="Lamination machine" />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Layers className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <span className="service-tag">Barrier &amp; Protection</span>
                <h3 className="service-title">Coating &amp; Lamination</h3>
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
                  <span>
                    Heat-seal, cold-seal &amp; speciality coating options
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* SLITTING */}
          <article className="service-card">
            <div className="service-card-image">
              <img src={assets.service3} alt="Slitting machine" />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Scissors className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <span className="service-tag">Precision Finishing</span>
                <h3 className="service-title">Web Slitting &amp; Rewinding</h3>
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
                  <span>
                    Custom slit widths for form-fill-seal &amp; VFFS machines
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Core &amp; roll OD as per your machine requirements
                  </span>
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
              <img src={assets.service4} alt="Pouching machine" />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Package className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <span className="service-tag">Ready-to-Fill</span>
                <h3 className="service-title">Pouch Conversion</h3>
              </div>
              <p className="service-description">
                Dedicated pouching lines convert printed laminates into
                shelf-ready formats that are strong, leak-proof and visually
                striking on the rack.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Center-seal, three-side seal &amp; side-gusset pouches
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Stand-up pouches with zipper, spout &amp; tear notch options
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>Heavy-duty bags designed up to 25&nbsp;kg fill weight</span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Laser scoring, euro-hole and punch options on request
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* PREPRESS & SUPPORT */}
          <article className="service-card">
            <div className="service-card-image">
              <img
                src={assets.service5}
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
                <span className="service-tag">Design Support</span>
                <h3 className="service-title">Prepress &amp; Consulting</h3>
              </div>
              <p className="service-description">
                We work closely with your marketing and procurement teams to
                translate design intent into packaging that is practical to
                produce and performs well in real-world conditions.
              </p>
              <ul className="service-features">
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Artwork review, trapping &amp; colour-separation guidance
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Recommendations on substrates, thickness &amp; structure
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Pack format suggestions based on filling &amp; distribution
                  </span>
                </li>
                <li>
                  <CheckCircle className="feature-check" />
                  <span>
                    Cost-to-performance optimisation for new launches
                  </span>
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

        {/* REDESIGNED WHY CHOOSE US SECTION */}
        <section className="why-choose-section">
          <div className="why-choose-header">
            <div className="why-header-badge">
              <Award className="why-badge-icon" />
              <span>Our Advantage</span>
            </div>
            <h2 className="why-choose-title">Why Choose Us</h2>
            <p className="why-choose-subtitle">
              Decades of expertise combined with cutting-edge technology to
              deliver packaging solutions that exceed expectations.
            </p>
          </div>

          <div className="why-features-grid">
            {whyChooseUsFeatures.map(
              ({ icon: Icon, title, description, gradient }, index) => (
                <div className="why-feature-card" key={index}>
                  <div className="why-feature-glow" />
                  <div className={`why-feature-icon-wrap gradient-${gradient}`}>
                    <Icon className="why-feature-icon" />
                  </div>
                  <h3 className="why-feature-title">{title}</h3>
                  <p className="why-feature-desc">{description}</p>
                </div>
              )
            )}
          </div>

          {/* Additional Value Points */}
          {/* <div className="why-value-cards">
            <div className="why-value-card why-value-primary">
              <div className="why-value-icon-circle">
                <Settings className="why-value-icon" />
              </div>
              <div className="why-value-content">
                <h3 className="why-value-title">Advanced Infrastructure</h3>
                <p className="why-value-text">
                  Our facility houses state-of-the-art machinery including
                  high-speed rotogravure and flexographic printing presses,
                  solvent-less lamination units, precision slitting machines,
                  and automated pouch-making equipment. Each machine is
                  regularly calibrated and maintained to deliver consistent,
                  high-quality output that meets international packaging
                  standards.
                </p>
              </div>
            </div>

            <div className="why-value-card why-value-secondary">
              <div className="why-value-icon-circle">
                <Lightbulb className="why-value-icon" />
              </div>
              <div className="why-value-content">
                <h3 className="why-value-title">Comprehensive Support</h3>
                <p className="why-value-text">
                  From concept to delivery, our technical team provides
                  end-to-end guidance. We assist with material selection,
                  structural design, artwork optimization, and production
                  planning. Our experts help you navigate regulatory
                  requirements, shelf-life testing, and sustainability
                  considerations, ensuring your packaging solution is both
                  commercially viable and market-ready.
                </p>
              </div>
            </div>
          </div> */}
        </section>
      </section>
    </main>
  );
}
