import React, { useState } from "react";
import "../../styles/homeservices.css";
import assets from "../../assets/images";

const HomeServices = () => {

  const products = [
    {
      id: 1,
      name: "Coffee & Tea Packaging",
      materials: ["PET/ALU/PE","BOPP/CPP","Metallized PET"],
      image1: assets.coffee,
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
      name: "Milk & Dairy Packaging Films",
      materials: ["LDPE", "LLDPE", "Co-extruded PE", "Laminated Films"],
      image1: assets.milk,
      image2: assets.milk1
    },
    {
      id: 4,
      name: "Edible Oil Packaging Films",
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

  const [hovered, setHovered] = useState(null);

  const handleServiceClick = (serviceId) => {
    window.location.hash = `#service-detail?service=${serviceId}`;
  };

  return (
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
            onClick={() => handleServiceClick(item.id)}
            style={{ cursor: "pointer" }}
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

      <div className="hs-explore-btn-container">
        <button
          className="hs-explore-btn"
          onClick={() => {
            window.location.hash = "#services";
          }}
        >
          Explore More
        </button>
      </div>

    </section>
  );
};

export default HomeServices;