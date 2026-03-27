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
import "../../styles/homeservices.css";

// Text configurations with varied animation styles
const textConfigurations = [
  {
    type: "two-line-caps",
    line1: "We Brand",
    line2: "4",
    showLogo: true,
    line1Color: "#14b8a6",
    line2Color: "#ffffff",
  },
  // {
  //   type: "three-word-mixed",
  //   word1: "Flexible",
  //   word2: "&",
  //   word3: "Quality",
  //   word1Color: "#d1d5db",
  //   word2Color: "#14b8a6",
  //   word3Color: "#d1d5db",
  // },
  {
    type: "two-word-mixed",
    word1: "Tea &",
    word2: "Coffee",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  
  {
    type: "two-word-mixed",
    word1: "Bakery &",
    word2: "Confectionary",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
    
  {
    type: "single-word",
    text: "Chips & Snacks",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Spices & Pulses",
    color: "#14b8a6",
  },
  {
    type: "three-word-mixed",
    word1: "Grains, ",
    word2: "Seeds",
    word3: "& Flour",
    word1Color: "#d1d5db",
    word2Color: "#14b8a6",
    word3Color: "#d1d5db",
  },
  {
    type: "two-word-mixed",
    word1: "Noodles &",
    word2: "Pasta",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "single-word",
    text: "Choclates & Protien Mix",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Oil & Liquid",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Pharma & Fertilizers",
    color: "#ffffff",
  },
  {
    type: "two-word-mixed",
    word1: "Next-Gen",
    word2: "EcoPackaging",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Frozen Shrimp & ",
    word2: "Sea Food",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Dairy",
    word2: "Products",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
   {
    type: "two-word-mixed",
    word1: "Pet",
    word2: "Feed",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
];

const products = [
  {
    id: 1,
    name: "Coffee & Tea",
    materials: ["PET/ALU/PE","BOPP/CPP","Metallized PET"],
    image1: assets.coffee,
    image2: assets.coffee1
  },
  {
    id: 2,
    name: "Chips",
    materials: ["BOPP","BOPP/CPP","Metallized BOPP"],
    image1: assets.chip,
    image2: assets.chip1
  },
  {
    id: 3,
    name: "Milk & Dairy",
    materials: ["LDPE", "LLDPE", "Co-extruded PE", "Laminated Films"],
    image1: assets.milk,
    image2: assets.milk1
  },
  {
    id: 4,
    name: "Oil",
    materials: ["LDPE", "LLDPE", "PET/PE Laminates", "Metallized PET"],
    image1: assets.oil,
    image2: assets.oil1
  },
  {
    id: 5,
    name: "Biscuit Packaging Films",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP", "BOPP/PE"],
    image1: assets.biscuit,
    image2: assets.biscuit1
  },
      {
    id: 6,
    name: "Wheat & Atta Packaging Films",
    materials: ["BOPP", "BOPP/PE", "PP Woven Laminates", "Metallized Films"],
    image1: assets.powdered,
    image2:assets.powdered1
  },
   {
    id: 7,
    name: "Vacuum Packaging Films",
    materials: ["PA/PE (Nylon/PE)", "EVOH Barrier Films"],
     image1: assets.vaccum,
    image2:assets.vaccum1
  },
      {
    id: 8,
    name: "Seafood Packaging Films",
    materials: ["PET/PE", "Nylon/PE", "High Barrier Laminates"],
    image1: assets.seafood,
    image2:assets.seafood1
  }
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
  const [hovered, setHovered] = useState(null);

  // Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textConfigurations.length);
    }, 1400);

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
                {currentConfig.showLogo ? (
                  <div className="text-line-with-logo">
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
                    <motion.img
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      src={assets.logo}
                      alt="UB Industries Logo"
                      className="text-line-logo"
                    />
                  </div>
                ) : (
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
                )}
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

      {/* HOME SERVICES - PRODUCTS SECTION */}
      <section className="home-services">
        <div className="hs-header">
          <h2>Custom Flexible Packaging</h2>
        </div>

        <div className="hs-grid">
          {products.map((item) => (
            <div
              key={item.id}
               className={`hs-card ${(item.id === 4 || item.id === 6 || item.id === 7 ||item.id === 8) ? "hs-card-small-img" : ""}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                window.location.hash = `#service-detail?service=${item.id}`;
              }}
              style={{ cursor: "pointer" }}
            >
              {/* IMAGE */}
              <div className="hs-image">
                <img
                  src={item.image1}
                  className={`img1 ${hovered === item.id ? "hide" : ""}`}
                  alt={item.name}
                />
                <img
                  src={item.image2}
                  className={`img2 ${hovered === item.id ? "show" : ""}`}
                  alt={item.name}
                />
              </div>

              {/* CONTENT - ALWAYS VISIBLE */}
              <div className="hs-content">
                <h3>{item.name}</h3>
                <div className="hs-materials">
                  {item.materials.map((mat, i) => (
                    <span key={i}>{mat}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      </section>
    </main>
  );
}