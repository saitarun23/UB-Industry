import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import assets from "../../assets/images";

// Essential Swiper Styles
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
    <section className="hero-section scroll-effect">
      <div className="hero-container">
        
        {/* LEFT COLUMN: STATIC TEXT (Stays put) */}
        <div className="hero-left">
          <h1 className="hero-title">
            Every print project, <br /> 
            handled with precision.
          </h1>
          <p className="hero-subtitle">
            Serving clients across India and around the globe.
          </p>
        </div>

        {/* RIGHT COLUMN: SWIPER (Images and Labels change together) */}
        <div className="hero-right">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }} // Ensures clean label transitions
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="hero-swiper"
          >
            {heroData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-box">
                  <div className="img-wrapper">
                    <img src={item.img} alt={item.label} className="slide-image" />
                  </div>
                  {/* Label is inside the slide so it changes WITH the image */}
                  <p className="slide-text">{item.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}