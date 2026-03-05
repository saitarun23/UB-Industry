import React, { useState } from "react";
import {
  Layers,
  Target,
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
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import FoodPacketIcon from "../../assets/components/icons/FoodPacketIcon";
import assets from "../../assets/images";
import "../../styles/services.css";

/* ── Data ─────────────────────────────────────────────────────── */

const packagingSolutions = [
  {
    title: "Food Packaging",
    desc: "Solutions suitable for nitrogen flushing, good moisture and oxygen barrier with matt, gloss and metallic finishes.",
    Icon: FoodPacketIcon,
    variant: "food",
  },
  {
    title: "Agriculture Packaging",
    desc: "Structures tailored for agricultural products with reliable barrier and mechanical strength for rural distribution.",
    Icon: Sprout,
    variant: "agri",
  },
  {
    title: "Milk Products Packaging",
    desc: "Laminates and pouches for milk and dairy products, maintaining hygiene, freshness and reliable distribution.",
    Icon: Milk,
    variant: "beverage",
  },
  {
    title: "Industrial Packaging",
    desc: "High-performance industrial laminates engineered for demanding environments and heavy products.",
    Icon: Layers,
    variant: "industrial",
  },
  {
    title: "Liquid Packaging",
    desc: "Leak-proof laminates and pouches for edible oils, cleaners and other liquid products.",
    Icon: Droplet,
    variant: "liquid",
  },
  {
    title: "Healthcare Packaging",
    desc: "Packaging suitable for pharma and healthcare products with high hygiene and protection needs.",
    Icon: HeartPulse,
    variant: "health",
  },
];

const allProducts = [
  {
    id: "food-packaging",
    name: "Food Packaging Films",
    badge: "FDA Compliant",
    popular: true,
    shortDesc: "Multi-layer barrier films for fresh and processed foods",
    specs: "High-barrier • FDA compliant • Vibrant rotogravure prints",
    materials: ["PET/ALU/PE", "BOPP/CPP", "Metallized PET"],
    image1: assets.biscuit,
    image2: assets.biscuit1,
    applications: "Biscuits, Chocolates, Dairy, Ready-to-eat Meals",
  },
  {
    id: "snack-films",
    name: "Snack & Chips Films",
    badge: "Auto-pack Ready",
    popular: true,
    shortDesc: "Moisture-resistant BOPP laminates with crisp bag properties",
    specs: "Moisture barrier • Auto-pack ready • High gloss finish",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP"],
    image1: assets.snackFilms,
    image2: assets.snackFilms2,
    applications: "Potato Chips, Namkeen, Extruded Snacks, Dry Fruits",
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical Packaging",
    badge: "Sterile Grade",
    popular: false,
    shortDesc: "Clean-room grade barrier laminates for medical applications",
    specs: "Light & oxygen barrier • Tamper-evident • Sterile grade",
    materials: ["PET/ALU/PE", "Paper Laminates", "Foil-based"],
    image1: "/images/services/pharma-1.jpg",
    image2: "/images/services/pharma-2.jpg",
    applications: "Blister Packs, Strip Packs, Sachets, Medical Wraps",
  },
  {
    id: "coffee-tea",
    name: "Coffee & Tea Packaging",
    badge: "Valve Ready",
    popular: false,
    shortDesc: "Aroma-lock multilayer films for premium beverages",
    specs: "Aroma retention • Valve-ready • UV barrier",
    materials: ["PET/ALU/PE", "BOPP/EVOH/PE", "Metallized"],
    image1: "/images/services/coffee-1.jpg",
    image2: "/images/services/coffee-2.jpg",
    applications: "Coffee Beans, Ground Coffee, Tea Leaves, Instant Mix",
  },
  {
    id: "spices-masala",
    name: "Spices & Masala Films",
    badge: "Aroma-lock",
    popular: false,
    shortDesc: "High-barrier films preserving aroma and freshness",
    specs: "Aroma-lock • Puncture resistant • Anti-static",
    materials: ["PET/PE", "BOPP/CPP", "Metallized Films"],
    image1: "/images/services/spices-1.jpg",
    image2: "/images/services/spices-2.jpg",
    applications: "Turmeric, Chili Powder, Curry Powder, Whole Spices",
  },
  {
    id: "agrochemicals",
    name: "Agrochemical Packaging",
    badge: "UV Stable",
    popular: false,
    shortDesc: "Heavy-duty chemical-resistant laminates",
    specs: "Chemical resistant • Puncture proof • UV stable",
    materials: ["BOPP", "PET/PE", "Nylon-based"],
    image1: "/images/services/agro-1.jpg",
    image2: "/images/services/agro-2.jpg",
    applications: "Pesticides, Herbicides, Fertilizers, Seeds",
  },
  {
    id: "pouch-films",
    name: "Stand-up Pouch Films",
    badge: "Zipper Ready",
    popular: true,
    shortDesc: "Versatile laminated structures for auto-pack machines",
    specs: "Zipper-ready • Spout compatible • Printable",
    materials: ["PET/PE", "BOPP/CPP", "Nylon/PE"],
    image1: "/images/services/pouch-1.jpg",
    image2: "/images/services/pouch-2.jpg",
    applications: "Liquid Products, Dry Mixes, Pet Food, Detergents",
  },
  {
    id: "lamination-base",
    name: "Lamination Base Films",
    badge: "Corona Treated",
    popular: false,
    shortDesc: "High-quality substrate films for converting operations",
    specs: "Corona treated • High clarity • Ink adhesion",
    materials: ["PET", "BOPP", "CPP", "PE"],
    image1: "/images/services/lamination-1.jpg",
    image2: "/images/services/lamination-2.jpg",
    applications: "Converting, Printing Base, Industrial Laminates",
  },
  {
    id: "retail-display",
    name: "Retail Display Films",
    badge: "High Clarity",
    popular: false,
    shortDesc: "Premium-finish films for consumer visibility",
    specs: "High clarity • Brilliant print • Shelf appeal",
    materials: ["BOPP", "PET", "CPP"],
    image1: "/images/services/retail-1.jpg",
    image2: "/images/services/retail-2.jpg",
    applications: "Window Packs, Overwraps, Gift Wraps, Sleeves",
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

/* ── Component ────────────────────────────────────────────────── */

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filterOptions = [
    { id: "all", label: "All Products" },
    { id: "food-packaging", label: "Food" },
    { id: "snack-films", label: "Snacks" },
    { id: "pharmaceutical", label: "Pharma" },
    { id: "agrochemicals", label: "Agro" },
    { id: "pouch-films", label: "Pouches" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.id === activeCategory);

  const handleViewDetails = (categoryId) => {
    window.location.hash = `#product-detail?category=${categoryId}`;
  };

  const handleButtonClick = (e, categoryId) => {
    e.stopPropagation();
    handleViewDetails(categoryId);
  };

  return (
    <main className="services-page" id="services">

      {/* ── HERO ─────────────────────────────────────────────── */}
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

      {/* ── MAIN BODY ─────────────────────────────────────────── */}
      <section className="services-main">

        {/* ── PACKAGING SOLUTIONS ─────────────────────────────── */}
        <section className="packaging-section">
          <div className="packaging-header">
            <h2 className="packaging-title scroll-effect">Packaging Solutions</h2>
            <p className="packaging-subtitle scroll-effect">
              Application-focused flexible packaging for different product categories.
            </p>
          </div>
          <div className="packaging-grid">
            {packagingSolutions.map(({ title, desc, Icon, variant }) => (
              <div className="pack-card scroll-effect" key={title}>
                <div className={`pack-icon-circle pack-${variant}`}>
                  <Icon className="pack-icon" />
                </div>
                <h3 className="pack-card-title">{title}</h3>
                <p className="pack-card-text">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── QUOTE BANNER ────────────────────────────────────── */}
        <section className="services-quote-banner">
          <div className="quote-icon-wrap scroll-effect">
            <Target className="quote-icon" />
          </div>
          <p className="scroll-effect">
            We support brands of every size — from pilot runs to full-scale
            production — with the same focus on quality, speed and reliability.
          </p>
        </section>

        {/* ── PRODUCT RANGE ───────────────────────────────────── */}
        <section className="sv-products-section">
          <div className="sv-products-header">
            <span className="sv-eyebrow">Our Product Range</span>
            <h2 className="sv-products-title scroll-effect">
              Rotogravure Printed Packaging Films
            </h2>
            <p className="sv-products-subtitle scroll-effect">
              High-barrier laminated films for food, pharma, and industrial applications.
              Browse our full catalogue below.
            </p>

            {/* Filter Buttons */}
            <div className="sv-quick-filters">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`sv-qf-btn ${activeCategory === opt.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="sv-products-grid">
            {filteredProducts.map((cat, idx) => (
              <div
                key={cat.id}
                className="sv-product-card"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="sv-img-wrap">
                  <img
                    src={cat.image1}
                    alt={cat.name}
                    className={`sv-img img-primary ${hoveredCard === cat.id ? "hide" : ""}`}
                  />
                  <img
                    src={cat.image2}
                    alt={cat.name}
                    className={`sv-img img-secondary ${hoveredCard === cat.id ? "show" : ""}`}
                  />
                  {/* {cat.popular && (
                    <span className="sv-popular-tag">Popular</span>
                  )}
                  <span className="sv-badge">{cat.badge}</span> */}
                </div>

                {/* Content */}
                <div className="sv-card-content">
                  <h3 className="sv-card-name">{cat.name}</h3>
                  <p className="sv-card-desc">{cat.shortDesc}</p>

                  <div className="sv-mat-tags">
                    {cat.materials.map((mat, i) => (
                      <span key={i} className="sv-mat-tag">{mat}</span>
                    ))}
                  </div>

                  <button 
                    className="sv-cta-btn"
                    onClick={(e) => handleButtonClick(e, cat.id)}
                  >
                    View Technical Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTION PROCESS ──────────────────────────────── */}
        <section className="sv-process-section">
          <div className="sv-process-header">
            <h3 className="sv-process-title scroll-effect">Our Production Process</h3>
            <p className="sv-process-subtitle scroll-effect">
              From printing to lamination — precision engineering at every step
            </p>
          </div>
          <div className="sv-process-steps">
            {[
              {
                num: "01",
                title: "Rotogravure Printing",
                desc: "High-quality multi-color printing on PET/BOPP at speeds up to 250 m/min",
              },
              {
                num: "02",
                title: "Lamination",
                desc: "Solvent/Solventless bonding of multiple layers for barrier properties",
              },
              {
                num: "03",
                title: "Slitting",
                desc: "Converting jumbo rolls into customer-specified widths with precision",
              },
              {
                num: "04",
                title: "Quality Check",
                desc: "100% inspection and packaging for dispatch with full traceability",
              },
            ].map((step, i, arr) => (
              <React.Fragment key={step.num}>
                <div className="sv-step scroll-effect">
                  <div className="sv-step-num">{step.num}</div>
                  <h4 className="sv-step-title">{step.title}</h4>
                  <p className="sv-step-desc">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="sv-step-arrow">
                    <ArrowRight size={28} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>  

      </section>
    </main>
  );
}