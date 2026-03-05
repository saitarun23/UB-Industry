import React, { useEffect, useState } from "react";
import "../../styles/servicedetail.css";
import assets from "../../assets/images";

const ServiceDetail = () => {
  const [serviceId, setServiceId] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  // Extract category from URL hash
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    setServiceId(params.get("category") || "");
    window.scrollTo(0, 0);
  }, []);

  // Complete service data
  const servicesData = {
    "food-packaging": {
      name: "Food Packaging Films",
      tagline: "Keep Food Fresh Longer with Our Barrier Films",
      images: [
        assets.biscuit,
        assets.biscuit1,
        "/images/services/food-packaging-3.jpg",
        "/images/services/food-packaging-4.jpg"
      ],
      
      overview: {
        description: "Our food packaging films use multiple layers to protect your products from oxygen, moisture, and light. FDA-approved materials keep food safe while bright prints make your brand stand out on shelves.",
        keyFeatures: [
          "Extends shelf life by 3-6 months",
          "Works with automatic packing machines",
          "FDA approved for direct food contact",
          "Up to 10-color printing available"
        ]
      },

      whatYouGet: [
        {
          title: "Material Options",
          items: [
            "PET/Aluminum/PE - Best for long shelf life products",
            "BOPP/BOPP/CPP - Good for dry foods like biscuits",
            "PET/Metallized/PE - Medium barrier for snacks",
            "Custom combinations - Tell us your product needs"
          ]
        },
        {
          title: "Roll Sizes Available",
          items: [
            "Width: 200mm to 1400mm (any size you need)",
            "Roll diameter: Up to 800mm",
            "Core size: 3 inch or 6 inch",
            "Maximum weight: 400 kg per roll"
          ]
        },
        {
          title: "Printing Quality",
          items: [
            "Rotogravure printing (cinema-quality clarity)",
            "Up to 10 colors in one print",
            "Pantone color matching (exact brand colors)",
            "Both sides printing available"
          ]
        }
      ],

      perfectFor: [
        { product: "Biscuits & Cookies", why: "Keeps them crispy, prevents moisture" },
        { product: "Chocolates", why: "Blocks light, prevents melting & bloom" },
        { product: "Dairy Products", why: "High barrier keeps fresh longer" },
        { product: "Ready-to-Eat Meals", why: "Retort-compatible for shelf-stable food" },
        { product: "Frozen Foods", why: "Works at freezing temperatures" }
      ],

      technicalSpecs: [
        { spec: "Oxygen Barrier", value: "Less than 0.5 cc/m²/day" },
        { spec: "Moisture Barrier", value: "Less than 1.0 g/m²/day" },
        { spec: "Seal Strength", value: "More than 3.0 N/15mm" },
        { spec: "Print Quality", value: "HD rotogravure (up to 10 colors)" },
        { spec: "FDA Compliance", value: "Yes - Direct food contact approved" },
        { spec: "Temperature Resistance", value: "-20°C to 120°C" }
      ],

      pricing: {
        moq: "500 kg per design",
        leadTime: "15-20 days after design approval",
        customization: "Yes - any size, structure, printing"
      }
    },

    "snack-films": {
      name: "Snack & Chips Films",
      tagline: "Keep Chips Crispy with Our Moisture-Proof Films",
      images: [
        assets.snackFilms,
        assets.snackFilms2,
        "/images/services/snack-films-3.jpg",
        "/images/services/snack-films-4.jpg"
      ],
      
      overview: {
        description: "BOPP-based films designed specifically for chips and snacks. Blocks moisture to keep products crunchy. High-speed machine compatible. Makes that satisfying crispy-bag sound customers love.",
        keyFeatures: [
          "Moisture barrier keeps snacks crunchy",
          "Works on VFFS/HFFS machines at 250 m/min",
          "Glossy finish makes colors pop",
          "Nitrogen-flush compatible"
        ]
      },

      whatYouGet: [
        {
          title: "Material Options",
          items: [
            "BOPP/BOPP/CPP - Standard for most chips",
            "BOPP/Metallized BOPP/CPP - Extra barrier for premium snacks",
            "BOPP/PE - Simple 2-layer for pillow pouches",
            "Custom gloss or matte finish"
          ]
        },
        {
          title: "Roll Sizes Available",
          items: [
            "Width: 150mm to 1200mm",
            "Roll diameter: Up to 700mm",
            "Core size: 3 inch or 6 inch",
            "Maximum weight: 350 kg per roll"
          ]
        },
        {
          title: "Printing & Finish",
          items: [
            "Up to 8-color rotogravure",
            "High-gloss or matte finish",
            "Metallic effects available",
            "Anti-static treatment (prevents sticking)"
          ]
        }
      ],

      perfectFor: [
        { product: "Potato Chips", why: "Blocks moisture, preserves crispness" },
        { product: "Namkeen & Bhujia", why: "Oil-resistant, prevents staleness" },
        { product: "Extruded Snacks", why: "High barrier for puffed products" },
        { product: "Dry Fruits & Nuts", why: "Aroma-lock, prevents rancidity" },
        { product: "Popcorn", why: "Grease-proof for butter flavors" }
      ],

      technicalSpecs: [
        { spec: "Moisture Barrier", value: "Less than 2.0 g/m²/day" },
        { spec: "Puncture Resistance", value: "More than 400g dart impact" },
        { spec: "Seal Strength", value: "More than 2.5 N/15mm" },
        { spec: "Gloss Level", value: "85% or higher (mirror finish)" },
        { spec: "Machine Speed", value: "Up to 250 meters/minute" },
        { spec: "Shelf Life", value: "6-12 months for packaged snacks" }
      ],

      pricing: {
        moq: "300 kg per design",
        leadTime: "12-18 days after design approval",
        customization: "Yes - any size, gloss level, printing"
      }
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => window.location.hash = "#home"}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="service-detail">
      {/* Back Button */}
      <div className="sd-top-bar">
        <button className="sd-back" onClick={() => window.location.hash = "#home"}>
          ← Back to All Products
        </button>
      </div>

      {/* Hero Section */}
      <div className="sd-hero-section">
        {/* Image Gallery */}
        <div className="sd-gallery">
          <div className="sd-main-image">
            <img src={service.images[selectedImage]} alt={service.name} />
          </div>
          <div className="sd-thumbnails">
            {service.images.map((img, i) => (
              <div 
                key={i}
                className={`sd-thumb ${selectedImage === i ? "active" : ""}`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`View ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="sd-info">
          <h1 className="sd-product-name">{service.name}</h1>
          <p className="sd-tagline">{service.tagline}</p>
          
          <div className="sd-overview-box">
            <p className="sd-description">{service.overview.description}</p>
            
            <div className="sd-key-features">
              <h3>Why Choose This?</h3>
              <ul>
                {service.overview.keyFeatures.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="sd-section">
        <h2 className="sd-section-title">What You Get</h2>
        <div className="sd-wyg-grid">
          {service.whatYouGet.map((section, i) => (
            <div key={i} className="sd-wyg-card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="sd-section alt-bg">
        <h2 className="sd-section-title">Perfect For These Products</h2>
        <div className="sd-perfect-grid">
          {service.perfectFor.map((item, i) => (
            <div key={i} className="sd-perfect-card">
              <h4>{item.product}</h4>
              <p>{item.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specs Table */}
      <div className="sd-section">
        <h2 className="sd-section-title">Technical Specifications</h2>
        <div className="sd-specs-table">
          <table>
            <tbody>
              {service.technicalSpecs.map((spec, i) => (
                <tr key={i}>
                  <td className="spec-name">{spec.spec}</td>
                  <td className="spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;