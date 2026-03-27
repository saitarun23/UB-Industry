import React, { useState, useEffect } from "react";
import "../../styles/servicedetail.css";
import assets from "../../assets/images";
import {
  FaShieldAlt,
  FaThermometerHalf,
  FaStar,
  FaLeaf,
  FaBullseye,
  FaWind,
  FaPalette,
  FaLightbulb,
  FaTint,
  FaSnowflake,
  FaLock,
  FaGlobeAmericas,
  FaSun,
  FaCircle,
  FaFire,
  FaFlask,
  FaChartBar,
  FaSeedling,
  FaBox,
  FaCube,
} from "react-icons/fa";

const ServiceDetail = ({ onChangePage }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Extract service ID from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    const serviceId = new URLSearchParams(hash.split("?")[1]).get("service");
    if (serviceId) {
      setSelectedService(parseInt(serviceId));
      setIsLoading(false);
    } else {
      // If no service selected, redirect to home
      setTimeout(() => {
        window.location.hash = "#home";
      }, 500);
    }
  }, []);

  // Service Database with detailed content
  const servicesData = {
    1: {
      name: "Coffee & Tea Packaging",
      subtitle: "Premium Flexible Packaging Solutions",
      description: "Specialized packaging films designed for coffee, tea, and beverage products with exceptional barrier properties.",
      image: assets.coffee,
      heroImage: assets.coffee1,
      features: [
        { iconName: "shield", title: "Aroma Barrier", desc: "Advanced oxygen barrier to maintain freshness" },
        { iconName: "thermometer", title: "Temperature Control", desc: "Handles hot filling and cold storage" },
        { iconName: "sparkles", title: "Glossy Finish", desc: "Premium appearance for retail shelf" },
        { iconName: "leaf", title: "Eco-Friendly", desc: "Recyclable and sustainable materials" },
      ],
      materials: [
        { name: "PET/ALU/PE", desc: "Excellent oxygen barrier, premium feel", uses: "Whole beans, ground coffee" },
        { name: "BOPP/CPP", desc: "Cost-effective with good visibility", uses: "Tea bags, ground tea" },
        { name: "Metallized PET", desc: "Enhanced barrier with metallic shine", uses: "Premium blends, specialty teas" },
      ],
      specifications: {
        "Thickness": "45-200 microns",
        "Width": "up to 2000mm",
        "Tensile Strength": "> 150 MPa",
        "Oxygen Transmission": "< 10 cc/m²/day",
        "Moisture Permeability": "< 5 g/m²/day",
      },
      applications: [
        "Coffee beans (whole & ground)",
        "Premium tea varieties",
        "Instant coffee & tea",
        "Coffee capsules packaging",
        "Tea blend packaging",
      ],
      benefits: [
        "Maintains aroma and flavor for extended shelf life",
        "Premium barrier properties protect from oxygen and moisture",
        "Customizable pouches with stand-up design",
        "High-speed compatibility with modern filling lines",
        "Cost-effective without compromising quality",
      ],
    },
    2: {
      name: "Snack & Chips Films",
      subtitle: "Crispy Packaging for Maximum Crunch",
      description: "High-barrier films engineered for snack packaging with superior crispness retention and shelf impact.",
      image: assets.chip,
      heroImage: assets.chip1,
      features: [
        { iconName: "target", title: "Crispness Lock", desc: "Maintains crunchiness throughout shelf life" },
        { iconName: "wind", title: "Weight Reduction", desc: "Thinner gauges, same barrier performance" },
        { iconName: "palette", title: "Vibrant Colors", desc: "Metallized surfaces showcase branding" },
        { iconName: "bolt", title: "High Speed", desc: "Compatible with ultra-fast filling machines" },
      ],
      materials: [
        { name: "BOPP", desc: "Crystal clear or metallized options", uses: "Potato chips, corn snacks" },
        { name: "BOPP/CPP", desc: "Heat-sealed structures for durability", uses: "Extruded snacks, puffed items" },
        { name: "Metallized BOPP", desc: "Eye-catching appeal with strong barrier", uses: "Premium snacks, gift packs" },
      ],
      specifications: {
        "Thickness": "35-100 microns",
        "Width": "up to 2200mm",
        "Tensile Strength": "> 180 MPa",
        "Oxygen Transmission": "< 20 cc/m²/day",
        "Machine Speed": "up to 800 bags/min",
      },
      applications: [
        "Potato chips and crisps",
        "Corn snacks and nachos",
        "Extruded snacks",
        "Puffed cereals",
        "Mixed nuts and seeds",
        "Fried onions and condiments",
      ],
      benefits: [
        "Extended crispness protection for 6-12 months",
        "Lightweight compared to rigid packaging",
        "Eye-catching metallized designs boost shelf appeal",
        "Cost-competitive with superior barrier properties",
        "Nitrogen flush compatible for extended shelf life",
      ],
    },
    3: {
      name: "Milk & Dairy Packaging Films",
      subtitle: "Food Safety & Freshness Guaranteed",
      description: "Specialized co-extruded and laminated films for milk, yogurt, and dairy products ensuring maximum protection.",
      image: assets.milk,
      heroImage: assets.milk1,
      features: [
        { iconName: "bottle", title: "Durability", desc: "Resistant to puncture and impact" },
        { iconName: "snowflake", title: "Cold Resistant", desc: "Performs well in frozen and refrigerated conditions" },
        { iconName: "lock", title: "Food Safe", desc: "FDA compliant food contact materials" },
        { iconName: "globe", title: "Eco Option", desc: "Compostable variants available" },
      ],
      materials: [
        { name: "LDPE", desc: "Standard milk pouch material", uses: "Milk pouches, yogurt containers" },
        { name: "LLDPE", desc: "Enhanced puncture resistance", uses: "Dairy products, frozen items" },
        { name: "Co-extruded PE", desc: "Multiple layer protection", uses: "Premium milk, organic dairy" },
        { name: "Laminated Films", desc: "Barrier + strength combination", uses: "Extended shelf-life dairy" },
      ],
      specifications: {
        "Thickness": "50-250 microns",
        "Width": "up to 1800mm",
        "Tensile Strength": "> 120 MPa",
        "Puncture Resistance": "> 5kg/mm²",
        "Temperature Range": "-20°C to +70°C",
      },
      applications: [
        "Liquid milk pouches",
        "Yogurt packaging",
        "Cheese packaging",
        "Butter and ghee containers",
        "Ice cream pouches",
        "Cream and condensed milk",
      ],
      benefits: [
        "Superior puncture and tear resistance",
        "Excellent seal integrity for liquid products",
        "Temperature range support (-20°C to +70°C)",
        "FDA and food safety compliant",
        "Customizable spout and valve options",
      ],
    },
    4: {
      name: "Edible Oil Packaging Films",
      subtitle: "Light & Oxidation Protection",
      description: "Advanced barrier films specifically designed for edible oil packaging with light-blocking properties.",
      image: assets.oil,
      heroImage: assets.oil1,
      features: [
        { iconName: "brightness", title: "Light Block", desc: "Prevents oxidation from UV and visible light" },
        { iconName: "shield", title: "Oxygen Barrier", desc: "Protects delicate oil flavors" },
        { iconName: "thermometer", title: "Heat Stable", desc: "Resists high-temperature fills" },
        { iconName: "flask", title: "Chemical Resistant", desc: "Safe with various oil types" },
      ],
      materials: [
        { name: "LDPE", desc: "Standard barrier oil film", uses: "Budget-friendly cooking oils" },
        { name: "LLDPE", desc: "Enhanced durability", uses: "Premium oils, nuts oils" },
        { name: "PET/PE Laminates", desc: "Strong light barrier", uses: "Olive oil, specialty oils" },
        { name: "Metallized PET", desc: "Maximum light protection", uses: "Extra virgin oils, premium blends" },
      ],
      specifications: {
        "Thickness": "75-200 microns",
        "Width": "up to 2000mm",
        "Tensile Strength": "> 140 MPa",
        "Oxygen Transmission": "< 5 cc/m²/day",
        "Light Transmission": "< 1%",
      },
      applications: [
        "Cooking oils (vegetable, refined)",
        "Olive oils (extra virgin, virgin)",
        "Specialty oils (coconut, sesame)",
        "Nut butter and oils",
        "Flavored oils",
        "Industrial oil packaging",
      ],
      benefits: [
        "Superior light-blocking properties maintain oil quality",
        "Excellent oxygen barrier prevents rancidity",
        "Heat-stable for hot-fill operations",
        "Resistant to oil permeation",
        "Extended shelf life (18-24 months)",
      ],
    },
    5: {
      name: "Food Packaging Films",
      subtitle: "Multi-Purpose Barrier Solutions",
      description: "Versatile packaging films for dried foods, ready-to-eat products, and general food packaging with broad application.",
      image: assets.chip,
      heroImage: assets.chip1,
      features: [
        { iconName: "target", title: "Versatile", desc: "Works across multiple product types" },
        { iconName: "shield", title: "Complete Barrier", desc: "Protects from oxygen, moisture, and light" },
        { iconName: "cubes", title: "Strength", desc: "Durable through supply chain" },
        { iconName: "box", title: "Shelf Ready", desc: "Print-friendly and visually appealing" },
      ],
      materials: [
        { name: "PET/PE", desc: "Standard multi-layer film", uses: "Dried fruits, nuts, grains" },
        { name: "BOPP/EVOH/PE", desc: "Premium oxygen barrier", uses: "Ready-to-eat meals, baked goods" },
        { name: "Metallized", desc: "Enhanced barrier + visual appeal", uses: "Premium products, gift items" },
      ],
      specifications: {
        "Thickness": "40-120 microns",
        "Width": "up to 2200mm",
        "Tensile Strength": "> 160 MPa",
        "Oxygen Transmission": "< 15 cc/m²/day",
        "Moisture Permeability": "< 8 g/m²/day",
      },
      applications: [
        "Dried fruits and vegetables",
        "Grains and cereals",
        "Nuts and seeds",
        "Baked goods",
        "Ready-to-eat meals",
        "Frozen foods",
      ],
      benefits: [
        "Broad application versatility",
        "Multi-layer barrier technology",
        "Cost-effective solution",
        "Excellent printability",
        "Nitrogen flush compatible",
      ],
    },
    6: {
      name: "Spices & Masala Films",
      subtitle: "Flavor Protection & Color Retention",
      description: "Specialty films designed for spices and masala products with aroma barrier and moisture control.",
      image: assets.chip,
      heroImage: assets.chip1,
      features: [
        { iconName: "ring", title: "Aroma Lock", desc: "Preserves essential oils and flavors" },
        { iconName: "palette", title: "Color Guard", desc: "Protects vibrant colors from fading" },
        { iconName: "wind", title: "Humidity Block", desc: "Maintains powder texture and flow" },
        { iconName: "sparkles", title: "Premium Look", desc: "Window display options available" },
      ],
      materials: [
        { name: "PET/PE", desc: "Standard spice barrier film", uses: "Ground spices, masala blends" },
        { name: "BOPP/CPP", desc: "Moisture and aroma barrier", uses: "Whole spices, dried herbs" },
        { name: "Metallized", desc: "Maximum protection with premium feel", uses: "Premium spice blends, gift sets" },
      ],
      specifications: {
        "Thickness": "50-150 microns",
        "Width": "up to 1800mm",
        "Tensile Strength": "> 150 MPa",
        "Oxygen Transmission": "< 10 cc/m²/day",
        "Moisture Permeability": "< 3 g/m²/day",
      },
      applications: [
        "Ground spices (turmeric, chili, cumin)",
        "Spice blends and masalas",
        "Dried herbs",
        "Condiment powders",
        "Food additives",
        "Organic spice packaging",
      ],
      benefits: [
        "Exceptional aroma preservation (12+ months)",
        "Color retention even in harsh conditions",
        "Superior moisture barrier for powder products",
        "Customizable pouch designs with zip-lock",
        "Safe for organic certification",
      ],
    },
    7: {
      name: "Agrochemical Films",
      subtitle: "Agricultural & Chemical Protection",
      description: "Heavy-duty films for agrochemicals with UV resistance and chemical compatibility for industrial use.",
      image: assets.chip,
      heroImage: assets.chip1,
      features: [
        { iconName: "sprout", title: "Chemical Safe", desc: "Resistant to fertilizer and pesticide contact" },
        { iconName: "brightness", title: "UV Protection", desc: "Blocks harmful UV radiation" },
        { iconName: "cubes", title: "Heavy Duty", desc: "Enhanced puncture and tear resistance" },
        { iconName: "flask", title: "Technical", desc: "Engineered for harsh conditions" },
      ],
      materials: [
        { name: "BOPP", desc: "Cost-effective chemical barrier", uses: "Fertilizers, dry chemicals" },
        { name: "PET/PE", desc: "Enhanced durability", uses: "Mixed agrochemicals" },
        { name: "Nylon Based", desc: "Superior chemical resistance", uses: "Liquid pesticides, solvents" },
      ],
      specifications: {
        "Thickness": "100-250 microns",
        "Width": "up to 2400mm",
        "Tensile Strength": "> 180 MPa",
        "Chemical Resistance": "Excellent",
        "UV Stability": "High (>18 months)",
      },
      applications: [
        "Fertilizer packaging",
        "Pesticide containers",
        "Fungicide packaging",
        "Herbicide containers",
        "Seed treatment materials",
        "Agricultural additives",
      ],
      benefits: [
        "Superior chemical compatibility",
        "UV-resistant for outdoor storage",
        "Heavy-duty construction for industrial handling",
        "Excellent seal integrity",
        "Cost-effective bulk packaging",
      ],
    },
  };

  const service = servicesData[selectedService];

  // Map icon names to React Icons
  const iconMap = {
    shield: <FaShieldAlt />,
    thermometer: <FaThermometerHalf />,
    sparkles: <FaStar />,
    leaf: <FaLeaf />,
    target: <FaBullseye />,
    wind: <FaWind />,
    palette: <FaPalette />,
    bolt: <FaLightbulb />,
    bottle: <FaTint />,
    snowflake: <FaSnowflake />,
    lock: <FaLock />,
    globe: <FaGlobeAmericas />,
    brightness: <FaSun />,
    ring: <FaCircle />,
    fire: <FaFire />,
    flask: <FaFlask />,
    chart: <FaChartBar />,
    sprout: <FaSeedling />,
    box: <FaBox />,
    cubes: <FaCube />,
  };

  if (isLoading || !service) {
    return (
      <div className="service-detail-loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      {/* HERO SECTION */}
      <section className="sd-hero">
        <div className="sd-hero-overlay"></div>
        <img src={assets.roll} alt="Packaging Roll" className="sd-hero-bg" />
        <div className="sd-hero-content">
          {/* <button
            className="sd-back-btn"
            onClick={() => {
              window.location.hash = "#home";
            }}
          >
            ← Back
          </button> */}
          <h1 className="sd-hero-title">{service.name}</h1>
          <p className="sd-hero-subtitle">{service.subtitle}</p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="sd-overview">
        <div className="sd-container">
          <div className="sd-overview-grid">
            <div className="sd-overview-image">
              <img src={service.image} alt={service.name} />
              {/* <div className="sd-image-badge">Premium Quality</div> */}
            </div>
            <div className="sd-overview-content">
              <h2>Overview</h2>
              <p>{service.description}</p>
              
              <div className="sd-packaging-sizes">
                <h3>Available Packaging Sizes</h3>
                <div className="sd-sizes-grid">
                  <div className="sd-size-item">
                    <div className="sd-size-label">Small</div>
                    <div className="sd-size-amount">1-100g</div>
                    <div className="sd-size-use">Sample, retail pouches</div>
                  </div>
                  <div className="sd-size-item">
                    <div className="sd-size-label">Medium</div>
                    <div className="sd-size-amount">100g - 1kg</div>
                    <div className="sd-size-use">Consumer packs</div>
                  </div>
                  <div className="sd-size-item">
                    <div className="sd-size-label">Large</div>
                    <div className="sd-size-amount">1kg - 5kg</div>
                    <div className="sd-size-use">Retail, food service</div>
                  </div>
                  <div className="sd-size-item">
                    <div className="sd-size-label">Bulk</div>
                    <div className="sd-size-amount">5kg - 25kg</div>
                    <div className="sd-size-use">Industrial, wholesale</div>
                  </div>
                </div>
              </div>

              <div className="sd-how-used">
                <h4>How It's Used</h4>
                <ul className="sd-usage-list">
                  <li>✓ Stand-up pouches with custom branding</li>
                  <li>✓ Pillow packs for automated filling</li>
                  <li>✓ Gusseted bags for weight capacity</li>
                  <li>✓ Flat bottom pouches for display</li>
                  <li>✓ Custom dimensions available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="sd-features">
        <div className="sd-container">
          <h2 className="sd-section-title">Key Features</h2>
          <div className="sd-features-grid">
            {service.features.map((feature, idx) => (
              <div key={idx} className="sd-feature-card">
                <div className="sd-feature-icon">{iconMap[feature.iconName]}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS SECTION */}
      <section className="sd-materials">
        <div className="sd-container">
          <h2 className="sd-section-title">Available Materials</h2>
          <div className="sd-materials-grid">
            {service.materials.map((mat, idx) => (
              <div key={idx} className="sd-material-card">
                <div className="sd-material-name">{mat.name}</div>
                <p className="sd-material-desc">{mat.desc}</p>
                <div className="sd-material-uses">
                  <strong>Uses:</strong> {mat.uses}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      {/* <section className="sd-applications">
        <div className="sd-container">
          <h2 className="sd-section-title">Applications</h2>
          <div className="sd-apps-list">
            {service.applications.map((app, idx) => (
              <div key={idx} className="sd-app-item">
                <span className="sd-app-icon">✓</span>
                {app}
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceDetail;
