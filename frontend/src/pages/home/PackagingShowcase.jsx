import React from 'react';
import { Package, Sprout, Droplet,HeartPulse } from 'lucide-react';
import "../../styles/packagingshowcase.css";
import assets from "../../assets/images";

export default function PackagingShowcase() {
  return (
    <section className="packaging-showcase">
      {/* Top accent line */}
      <div className="accent-line-top"></div>
      
      <div className="showcase-container">
        {/* Left Content Panel */}
        <div className="content-panel">
          <div className="vertical-accent"></div>
          
          <div className="content-wrapper">
            <div className="section-label">
              <span className="label-badge">OUR MATERIALS</span>
            </div>
            
            <h2 className="section-title">
              We offer a wide range of<br/>
              <span className="highlight-text">flexible packaging materials</span>
            </h2>
            
            <ul className="materials-list">
              <li>
                <HeartPulse className="material-icon pharma-icon" />
                <span className="material-text">Pharmaceutical Packaging materials</span>
              </li>
              <li>
                <Sprout className="material-icon agri-icon" />
                <span className="material-text">Agricultural Packaging materials</span>
              </li>
              <li>
                <Package className="material-icon food-icon" />
                <span className="material-text">Food Packaging materials</span>
              </li>
              
              <li>
                <Droplet className="material-icon beverage-icon" />
                <span className="material-text">Liquid Packaging materials</span>
              </li>
              
            </ul>

            <p className="description-text">
              Their excellent strength, durability, resistance to moisture, 
              impeccable finish, make these flexible packaging materials 
              highly demanded.
            </p>

            {/* <p className="description-text">
              Food processing, chemical, beverages, pharmaceutical industries 
              are some of the sectors where the offered materials are used for 
              packaging purposes.
            </p> */}
          </div>
        </div>

        {/* Right Content Panel - Customization */}
        <div className="customization-panel">
          <div className="customization-block">
            <div className="block-header">
              <span className="feature-icon">⚙</span>
              <span className="feature-title">Customization</span>
            </div>
            <p className="description-text">
              As per the sizes, thicknesses and designs, provided by the clients, 
              the offered packaging products can be customized at our end. 
              To manufacture these products we are equipped with latest technology 
              that enables us to print, laminate, cut and slit easily and effectively.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="accent-line-bottom"></div>
    </section>
  );
}