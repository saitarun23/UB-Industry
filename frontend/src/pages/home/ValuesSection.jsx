import "../../styles/valuessection.css";
import { FiEye, FiTarget, FiAward } from "react-icons/fi";

const values = [
  {
    icon: <FiEye />,
    title: "Vision",
    desc: "To deliver innovative and creative packaging solutions that elevate brand identity and customer trust.",
  },
  {
    icon: <FiTarget />,
    title: "Mission",
    desc: "To consistently produce high-quality printed and laminated packaging through technology, teamwork, and precision.",
  },
  {
    icon: <FiAward />,
    title: "Quality",
    desc: "Customer satisfaction through uncompromised quality standards, continuous improvement, and excellence.",
  },
];

export default function ValuesSection() {
  return (
    <section className="values-section scroll-effect">
      <div className="values-header scroll-effect">
        <span>Our Core Values</span>
        <h2>What Drives Us Forward</h2>
      </div>

      <div className="values-grid scroll-effect">
        {values.map((item, index) => (
          <div className="value-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
