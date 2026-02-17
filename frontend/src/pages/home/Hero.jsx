import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import assets from "../../assets/images";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../../styles/hero.css";

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const mainCategories = [
    { id: 1, img: assets.print,  icon: "print"   },
    { id: 2, img: assets.laminate, icon: "layers" },
    { id: 3, img: assets.pack,   icon: "package"  },
  ];

  const finalProducts = [
    { id: 4, img: assets.product1 },
    { id: 5, img: assets.product2 },
    { id: 6, img: assets.product3 },
    { id: 7, img: assets.product4 },
    { id: 8, img: assets.product5 },
    { id: 9, img: assets.product6 },
  ];

  const allSlides = [...mainCategories, ...finalProducts];
  const activeIndex_ = activeIndex;

  const PrintIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
  );

  const LayersIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );

  const PackageIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  const getIcon = (iconName) => {
    switch (iconName) {
      case "print":   return <PrintIcon />;
      case "layers":  return <LayersIcon />;
      case "package": return <PackageIcon />;
      default:        return null;
    }
  };

  const getSubtitle = (icon) => {
    if (icon === "print")   return "Precision printing";
    if (icon === "layers")  return "Layer protection";
    if (icon === "package") return "Final packaging";
    return "";
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-pattern"></div>

      <div className="hero-container">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">

          <h1 className="hero-title">
            <span className="title-main">Layers that Perform</span>
            <span className="title-main">Results that Deliver</span>
          </h1>

          <p className="hero-description">
            Comprehensive rotogravure printing, lamination, and packaging
            solutions serving industries across India and worldwide.
          </p>

          <div className="process-section">
            <h3 className="process-heading">Our Process</h3>
            <div className="process-grid">
              {mainCategories.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div
                    className={`process-card ${activeIndex_ === index ? "active" : ""}`}
                    onClick={() => swiperRef.current?.slideTo(index)}
                  >
                    <div className="process-icon">{getIcon(item.icon)}</div>
                    <div className="process-content">
                      <p className="process-subtitle">{getSubtitle(item.icon)}</p>
                    </div>
                  </div>
                  {index < 2 && <div className="process-arrow">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-right">
          <div className="swiper-wrapper-outer">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={false}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={1200}
              navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
              className="hero-swiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {allSlides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide-wrapper">
                    <div className="image-frame">
                      <img
                        src={item.img}
                        alt="slide"
                        className="slide-image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
}