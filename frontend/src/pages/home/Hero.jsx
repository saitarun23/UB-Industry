import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import assets from "../../assets/images";

import "swiper/css";
import "swiper/css/effect-fade";
import "../../styles/hero.css";

export default function Hero() {
  // Add a background color for each product
  const heroData = [
    { id: 1, img: assets.product1, bg: "linear-gradient(135deg, #e5e909 0%, #e5f10b 100%)" }, // green-ish
    { id: 2, img: assets.product2, bg: "linear-gradient(135deg, #bbff99 0%, #18ff08 100%)" }, // orange/red
    { id: 3, img: assets.product3, bg: "linear-gradient(135deg, #f72516 0%, #e31313 100%)" }, // yellow/orange
    { id: 4, img: assets.product4, bg: "linear-gradient(135deg, #0d35e7 0%, #150bd8 100%)" }, // blue
    { id: 5, img: assets.product5, bg: "linear-gradient(135deg, #f8a10d 0%, #f39f86 100%)" }, // warm
    { id: 6, img: assets.product6, bg: "linear-gradient(135deg, #f309ff 0%, #b301ff 100%)" }, // light
    { id: 7, img: assets.product7, bg: "linear-gradient(135deg, #ffc400 0%, #fb3b06 100%)" }, // warm
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="hero-section"
      style={{ background: heroData[activeIndex].bg }}
    >
      {/* Wavy background pattern */}
      <div className="hero-bg-pattern">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wave-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
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

        {/* RIGHT COLUMN - Product Swiper */}
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
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {heroData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide-content">
                    <img
                      src={item.img}
                      alt=""
                      className="slide-image"
                    />
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
