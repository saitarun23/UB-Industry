import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import assets from "../../assets/images";

import "swiper/css";
import "swiper/css/effect-fade";
import "../../styles/hero.css";

export default function Hero() {
  const heroData = [
    { id: 1, img: assets.hero1, label: "Cartons" },
    { id: 2, img: assets.hero2, label: "Labels" },
    { id: 3, img: assets.hero1, label: "Rigid Boxes" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-bg-pattern" />

      <div className="hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <span className="hero-kicker">PRINT • PACKAGING • PRODUCTION</span>

          <h1 className="hero-title">
            We cover the entire gamut
            <br />
            of print needs.
          </h1>

          <p className="hero-subtitle">
            Serving customers across India and worldwide.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="hero-swiper"
          >
            {heroData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-box">
                  <div className="slide-card">
                    <div className="img-wrapper">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="slide-image"
                      />
                    </div>
                    <div className="slide-footer">
                      <span className="slide-label">{item.label}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
