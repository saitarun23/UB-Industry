import "../../styles/whychooseus.css";
import assets from "../../assets/images"; 

import {
  FiShield,
  FiAward,
  FiUsers,
  FiCheckCircle,
  FiPackage,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  { icon: <FiPackage />, title: "Quality Material" },
  { icon: <FiShield />, title: "Fully Insured" },
  { icon: <FiAward />, title: "Certified Excellence" },
  { icon: <FiThumbsUp />, title: "Trusted Process" },
  { icon: <FiUsers />, title: "Trained Workers" },
  { icon: <FiCheckCircle />, title: "Guaranteed Output" },
];

export default function WhyChooseUs() {
  return (
    <section
      className="why-section"
      style={{ backgroundImage: `url(${assets.hero1})` }} // ✅ background image
    >
      <div className="why-overlay"></div>

      <div className="why-container scroll-effect">
        {/* LEFT CONTENT */}
        <div className="why-left scroll-effect">
          <span className="why-tag">Why Choose</span>

          <h2>
            UB Industries<br />
            Built on <strong>Quality</strong>. Driven by <strong>Precision</strong>.
          </h2>

          {/* <p>
            We combine advanced technology, skilled professionals, and strict
            quality control to deliver world-class flexible packaging solutions.
          </p> */}
        </div>

        {/* RIGHT GRID */}
        <div className="why-grid scroll-effect">
          {features.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
