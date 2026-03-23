import React, { useState } from "react";
import "../../styles/homeservices.css";
import assets from "../../assets/images";

const HomeServices = () => {

  const products = [
    {
      id: 1,
      name: "Coffee & Tea Packaging",
      materials: ["PET/ALU/PE","BOPP/CPP","Metallized PET"],
      image1: assets.coffees,
      image2: assets.coffee1
    },
    {
      id: 2,
      name: "Snack & Chips Films",
      materials: ["BOPP","BOPP/CPP","Metallized BOPP"],
      image1: assets.chip,
      image2: assets.chip1
    },
    {
      id: 3,
      name: "Pharmaceutical Films",
      materials: ["PET/ALU/PE","Foil Laminates","Paper Laminates"],
      image1: assets.healthcares,
      image2: assets.healthcare1
    },
    {
      id: 4,
      name: "Food Packaging Films",
      materials: ["PET/PE","BOPP/EVOH/PE","Metallized"],
      image1: "/images/services/coffee-1.jpg",
      image2: "/images/services/coffee-2.jpg"
    },
    {
      id: 5,
      name: "Spices & Masala Films",
      materials: ["PET/PE","BOPP/CPP","Metallized"],
      image1: "/images/services/spices-1.jpg",
      image2: "/images/services/spices-2.jpg"
    },
    {
      id: 6,
      name: "Agrochemical Films",
      materials: ["BOPP","PET/PE","Nylon Based"],
      image1: "/images/services/agro-1.jpg",
      image2: "/images/services/agro-2.jpg"
    }
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="home-services">

      <div className="hs-header">
        <h2>Custom Flexible Packaging</h2>
      </div>

      <div className="hs-grid">

        {products.map((item) => (

          <div
            key={item.id}
            className={`hs-card ${hovered === item.id ? "active" : ""}`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >

            {/* IMAGE */}
            <div className="hs-image">

              <img
                src={item.image1}
                className={`img1 ${hovered === item.id ? "hide" : ""}`}
                alt=""
              />

              <img
                src={item.image2}
                className={`img2 ${hovered === item.id ? "show" : ""}`}
                alt=""
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
  );
};

export default HomeServices;