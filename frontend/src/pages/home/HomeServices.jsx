import React, { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import "../../styles/homeservices.css";
import assets from "../../assets/images";

const HomeServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Show only 8 products on home page
  const featuredProducts = [
    {
      id: "coffee-tea",
      name: "Coffee & Tea Packaging",
      badge: "FDA Compliant",
      popular: true,
      shortDesc: "Multi-layer barrier films for fresh and processed foods",
      materials: ["PET/ALU/PE", "BOPP/CPP", "Metallized PET"],
      image1: assets.coffees,
      image2: assets.biscuit1,
    },
    {
      id: "snack-films",
      name: "Snack & Chips Films",
      badge: "Auto-pack Ready",
      popular: true,
      shortDesc: "Moisture-resistant BOPP laminates with crisp bag properties",
      materials: ["BOPP", "BOPP/CPP", "Metallized BOPP"],
      image1: assets.snackFilms,
      image2: assets.snackFilms2,
    },
    {
      id: "pharmaceutical",
      name: "Pharmaceutical Packaging",
      badge: "Sterile Grade",
      popular: false,
      shortDesc: "Clean-room grade barrier laminates for medical applications",
      materials: ["PET/ALU/PE", "Paper Laminates", "Foil-based"],
      image1: "/images/services/pharma-1.jpg",
      image2: "/images/services/pharma-2.jpg",
    },
    {
      id: "food-packaging",
      name: "Food Packaging Films",
      badge: "Valve Ready",
      popular: false,
      shortDesc: "Aroma-lock multilayer films for premium beverages",
      materials: ["PET/ALU/PE", "BOPP/EVOH/PE", "Metallized"],
      image1: "/images/services/coffee-1.jpg",
      image2: "/images/services/coffee-2.jpg",
    },
    {
      id: "spices-masala",
      name: "Spices & Masala Films",
      badge: "Aroma-lock",
      popular: false,
      shortDesc: "High-barrier films preserving aroma and freshness",
      materials: ["PET/PE", "BOPP/CPP", "Metallized Films"],
      image1: "/images/services/spices-1.jpg",
      image2: "/images/services/spices-2.jpg",
    },
    {
      id: "agrochemicals",
      name: "Agrochemical Packaging",
      badge: "UV Stable",
      popular: false,
      shortDesc: "Heavy-duty chemical-resistant laminates",
      materials: ["BOPP", "PET/PE", "Nylon-based"],
      image1: "/images/services/agro-1.jpg",
      image2: "/images/services/agro-2.jpg",
    },
    // {
    //   id: "pouch-films",
    //   name: "Stand-up Pouch Films",
    //   shortDesc: "Versatile laminated structures for auto-pack machines",
    //   materials: ["PET/PE", "BOPP/CPP", "Nylon/PE"],
    //   image1: "/images/services/pouch-1.jpg",
    //   image2: "/images/services/pouch-2.jpg",
    // },
    // {
    //   id: "retail-display",
    //   name: "Retail Display Films",
    //   badge: "High Clarity",
    //   popular: false,
    //   shortDesc: "Premium-finish films for consumer visibility",
    //   materials: ["BOPP", "PET", "CPP"],
    //   image1: "/images/services/retail-1.jpg",
    //   image2: "/images/services/retail-2.jpg",
    // },
  ];

  const handleViewDetails = (categoryId) => {
    window.location.hash = `#product-detail?category=${categoryId}`;
  };

  const handleExploreMore = () => {
    // Navigate to the Services page
    window.location.hash = "#services";
    setTimeout(() => {
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="home-services">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="hs-header">
        <span className="hs-eyebrow">Our Services</span>
        <h2 className="hs-title">Rotogravure Printed Packaging Films</h2>
        <p className="hs-subtitle">
          High-barrier laminated films for food, pharma, and industrial applications
        </p>
      </div>

      {/* ── Products Grid (8 cards) ─────────────────────────────── */}
      <div className="hs-products-grid">
        {featuredProducts.map((cat, idx) => (
          <div
            key={cat.id}
            className="hs-product-card"
            style={{ animationDelay: `${idx * 0.05}s` }}
            onMouseEnter={() => setHoveredCard(cat.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleViewDetails(cat.id)}
          >
            {/* Image */}
            <div className="hsp-image-wrap">
              <img
                src={cat.image1}
                alt={cat.name}
                className={`hsp-img img-1 ${hoveredCard === cat.id ? "hide" : ""}`}
              />
              <img
                src={cat.image2}
                alt={cat.name}
                className={`hsp-img img-2 ${hoveredCard === cat.id ? "show" : ""}`}
              />
              {/* <span className="hsp-badge">{cat.badge}</span> */}
              {/* {cat.popular && (
                <span className="hsp-popular-tag">Popular</span>
              )} */}
            </div>

            {/* Content */}
            <div className="hsp-content">
              <h3 className="hsp-name">{cat.name}</h3>
              {/* <p className="hsp-desc">{cat.shortDesc}</p> */}

              {/* <div className="hsp-materials">
                {cat.materials.map((mat, i) => (
                  <span key={i} className="hsp-mat-tag">{mat}</span>
                ))}
              </div> */}

              {/* <button className="hsp-cta-btn">
                View Technical Details
                <span className="hsp-arrow">→</span>
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* ── Explore More Banner ─────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
        <button className="hs-explore-btn" onClick={handleExploreMore}>
          Explore More
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HomeServices;