import React, { useRef, useState, useEffect } from "react";
import "../../styles/homeproducts.css";
import assets from "../../assets/images";
import { FiLink, FiSearch } from "react-icons/fi";

const homeproducts = [
  { title: "Dairy Products", image: assets.dairy },
  { title: "Vaccum Packaging", image: assets.vaccum },
  { title: "Personal Care Packaging", image: assets.personalcare },
  { title: "Household Products", image: assets.powdered },
  { title: "Seafood", image: assets.seafood },
  { title: "Beverage Packaging", image: assets.beverges },
  { title: "Biscuits Packaging", image: assets.biscuits },
  { title: "Chips Packaging", image: assets.chips },
  { title: "Coffee Packaging", image: assets.coffee },
  { title: "Oil Packaging", image: assets.oil },
  { title: "Healthcare Packaging", image: assets.healthcare },
  { title: "Lid Packaging", image: assets.lid },
  { title: "Chemical Packaging", image: assets.chemical },
  { title: "Agriculture Packaging", image: assets.agriculture },
  { title: "Shrink Packaging", image: assets.shrink },
  { title: "E-commerce Packaging", image: assets.ecommerce },
];

// duplicated for seamless infinite loop
const extendedProducts = [...homeproducts, ...homeproducts];

export default function HomeProducts() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // auto-scroll in a circular loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.4; // px per frame

    const step = () => {
      if (!isHovered) {
        const maxLoopPoint =
          (container.scrollWidth - container.clientWidth) / 2;

        if (container.scrollLeft >= maxLoopPoint) {
          container.scrollLeft = 0;
        }

        container.scrollLeft += speed;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  // when mouse wheel is over the strip, scroll horizontally instead of page
  const handleWheel = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    e.preventDefault(); // stop page vertical scroll
    const delta = e.deltaY || e.deltaX;
    container.scrollLeft += delta;
  };

  return (
    <section className="homeproducts-section scroll-effect">
      {/* HEADING */}
      <div className="homeproducts-heading scroll-effect">
        <span>Products</span>
        <h2>
          We specialize in the production of high-quality flexible packaging
          solutions across industries.
        </h2>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="homeproducts-scroll-wrapper">
        <div
          ref={scrollContainerRef}
          className="homeproducts-scroll-container scroll-effect"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onWheel={handleWheel}
        >
          {extendedProducts.map((item, index) => (
            <div className="homeproduct-card" key={`${item.title}-${index}`}>
              <img src={item.image} alt={item.title} />

              <div className="homeproduct-overlay">
                <h3>{item.title}</h3>

                <div className="homeproductoverlay-icons">
                  <span>
                    <FiLink />
                  </span>
                  <span>
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
