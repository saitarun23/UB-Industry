import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import assets from "../../assets/images";

import "swiper/css";
import "swiper/css/effect-fade";
import "../../styles/hero.css";

export default function Hero() {
  const heroData = [
    { id: 1, img: assets.product1, label: "Rigid Boxes" },
    { id: 2, img: assets.product2, label: "Labels" },
    { id: 3, img: assets.product3, label: "Cartons" },
    { id: 4, img: assets.product4, label: "Flex Banners" },
    { id: 5, img: assets.product5, label: "Paper Bags" },
    { id: 6, img: assets.product6, label: "Brochures" },
    { id: 7, img: assets.product7, label: "Flyers" },
  ];

  return (
    <section className="hero-section">
      {/* Wavy background pattern */}
      <div className="hero-bg-pattern">
        <svg className="wave-svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 40, 50 50 T 100 50"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0 60 Q 25 50, 50 60 T 100 60"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <h1 className="hero-title">
            We cover the
            <br />
            entire gamut of
            <br />
            print needs
          </h1>

          <p className="hero-subtitle">
            We serve customers across India
            <br />
            and world-wide.
          </p>
        </div>

        {/* RIGHT COLUMN - 3D Card Swiper */}
        <div className="hero-right">
          <div className="hero-swiper-wrapper">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              speed={1000}
              className="hero-swiper"
            >
              {heroData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide-content">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="slide-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Label below the image */}
            <div className="slide-label-wrapper">
              <span className="slide-label">{heroData[0].label}</span>
            </div>

            {/* Pagination dots */}
            <div className="hero-pagination">
              {heroData.map((item, index) => (
                <span key={item.id} className={`dot ${index === 0 ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}