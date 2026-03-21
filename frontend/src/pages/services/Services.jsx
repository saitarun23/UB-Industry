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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodPacketIcon from "../../assets/components/icons/FoodPacketIcon";

import assets from "../../assets/images";
import "../../styles/services.css";

// Text configurations with varied animation styles
const textConfigurations = [
  {
    type: "two-line-caps",
    line1: "BUILT FOR",
    line2: "YOU",
    line1Color: "#ffffff",
    line2Color: "#fbbf24",
  },
  {
    type: "two-word-mixed",
    word1: "Tea",
    word2: "Coffee",
    word1Color: "#ffffff",
    word2Color: "#fbbf24",
  },
  {
    type: "three-word-mixed",
    word1: "Lawn",
    word2: "&",
    word3: "Garden",
    word1Color: "#d1d5db",
    word2Color: "#fbbf24",
    word3Color: "#d1d5db",
  },
  {
    type: "two-word-mixed",
    word1: "Pet",
    word2: "Food",
    word1Color: "#ffffff",
    word2Color: "#fbbf24",
  },
  {
    type: "single-word",
    text: "Bakery",
    color: "#ffffff",
  },
  {
    type: "two-word-mixed",
    word1: "Natural",
    word2: "& Organic",
    word1Color: "#ffffff",
    word2Color: "#fbbf24",
  },
  {
    type: "single-word",
    text: "Chips",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Spices",
    color: "#fbbf24",
  },
  {
    type: "single-word",
    text: "Dates",
    color: "#ffffff",
  },
  {
    type: "two-word-mixed",
    word1: "Milk",
    word2: "Products",
    word1Color: "#ffffff",
    word2Color: "#fbbf24",
  },
];

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
  // Hero text rotation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textConfigurations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentConfig = textConfigurations[currentTextIndex];

  return (
    <main className="services-page" id="services">
      {/* NEW ANIMATED HERO */}
      <header className="services-hero-new">
        <div className="services-bg-pattern"></div>

        <div className="services-hero-content-new">
          <AnimatePresence mode="wait">
            {/* Two Line Caps Layout */}
            {currentConfig.type === "two-line-caps" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {/* Two Line Mixed Layout */}
            {currentConfig.type === "two-line-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {/* Two Word Mixed Layout */}
            {currentConfig.type === "two-word-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-inline"
              >
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.word1Color }}
                  className="text-word"
                >
                  {currentConfig.word1}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.word2Color }}
                  className="text-word"
                >
                  {currentConfig.word2}
                </motion.span>
              </motion.div>
            )}

            {/* Three Word Mixed Layout */}
            {currentConfig.type === "three-word-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-inline"
              >
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.word1Color }}
                  className="text-word"
                >
                  {currentConfig.word1}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.word2Color }}
                  className="text-word"
                >
                  {currentConfig.word2}
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ color: currentConfig.word3Color }}
                  className="text-word"
                >
                  {currentConfig.word3}
                </motion.span>
              </motion.div>
            )}

            {/* Single Word Layout */}
            {currentConfig.type === "single-word" && (
              <motion.h1
                key={currentTextIndex}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: currentConfig.color }}
                className="text-single"
              >
                {currentConfig.text}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* MAIN BODY */}
      <section className="services-main">
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
          <div className="quote-icon-wrap scroll-effect">
            <Target className="quote-icon scroll-effect" />
          </div>
          <p className="scroll-effect">
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
                src={assets.printing}
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
            <div className="service-card-image scroll-effect">
              <img src={assets.lamination} alt="Lamination machine" />
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
            <div className="service-card-image scroll-effect">
              <img src={assets.sliting} alt="Slitting machine" />
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
            <div className="service-card-image scroll-effect ">
              <img src={assets.pouching} alt="Pouching machine" />
              <div className="image-overlay">
                <div className="overlay-icon-wrap">
                  <Package className="overlay-icon" />
                </div>
              </div>
            </div>
            <div className="service-card-content">
              <div className="service-header">
                <span className="service-tag">Flexible Packaging</span>
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
        </section>

        {/* SECOND QUOTE BANNER */}
        <section className="services-quote-banner services-quote-secondary">
          <div className="quote-icon-wrap scroll-effect">
            <Lightbulb className="quote-icon scroll-effect" />
          </div>
          <p className="scroll-effect">
            Choosing the right film, structure and format is as important as
            choosing the right design. Our team helps you get all three right.
          </p>
        </section>

        {/* REDESIGNED Built for You SECTION */}
        <section className="why-choose-section ">
          <div className="why-choose-header scroll-effect">
            <div className="why-header-badge">
              <Award className="why-badge-icon" />
              <span>Our Advantage</span>
            </div>
            <h2 className="why-choose-title">Built for You</h2>
            <p className="why-choose-subtitle">
              Decades of expertise combined with cutting-edge technology to
              deliver packaging solutions that exceed expectations.
            </p>
          </div>

          <div className="why-features-grid ">
            {whyChooseUsFeatures.map(
              ({ icon: Icon, title, description, gradient }, index) => (
                <div className="why-feature-card scroll-effect" key={index}>
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
        </section>
      </section>
    </main>
  );
}