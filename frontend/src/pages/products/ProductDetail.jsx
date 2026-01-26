import { useState, useEffect } from "react";
import assets from "../../assets/images";
import "../../styles/productdetail.css";

const PRODUCT_DETAILS = {
  biscuits: {
    title: "Biscuits",
    images: [
      assets.biscuit1,
      assets.biscuit2,
      assets.biscuit3,
      assets.biscuit4,
      assets.biscuit5,
      assets.biscuit6,
    ],

    applications: [
      "Biscuits",
      "Cookies",
      "Chocolate Bars",
      "Candy",
      "Candy Sticks",
      "Chewing Gum",
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      MET BOPP, CPP, MET CPP, Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  // ADD OTHER PRODUCTS HERE...
};

export default function ProductDetail() {
  const [itemId, setItemId] = useState("");

  // Extract item from query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    setItemId(params.get("item") || "");
  }, []);

  const data = PRODUCT_DETAILS[itemId];

  if (!itemId || !data) return <h1 style={{ color: "white" }}>Product not found</h1>;

  return (
    <main className="product-detail-page">
      <section className="detail-header">
        <h1>{data.title}</h1>
      </section>

      <section className="detail-images">
        {data.images.map((img, index) => (
          <div key={index} className="detail-img-box">
            <img src={img} alt={data.title} />
          </div>
        ))}
      </section>

      <section className="detail-content">

        {/* <div className="detail-left">
          <h2>Applications</h2>
          <ul>
            {data.applications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}

        <div className="detail-right">
          <h2>Overview</h2>

          <h3>Material Combinations / Technical Details</h3>
          <p>{data.overview.materials}</p>

          <h3>Features</h3>
          <ul>
            {data.overview.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Customer Benefits</h3>
          <ul>
            {data.overview.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </section>
    </main>
  );
}
