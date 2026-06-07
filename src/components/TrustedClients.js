// TrustedClients.jsx
import React from "react";
import "./TrustedClients.css";

const stats = [
  {
    number: "120+",
    title: "Happy Clients",
  },
  {
    number: "250+",
    title: "Projects Completed",
  },
  {
    number: "8+",
    title: "Years Experience",
  },
  {
    number: "98%",
    title: "Client Retention",
  },
];

const TrustedClients = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <span className="trusted-line"></span>

        <p className="trusted-subtitle">Trusted Worldwide</p>

        <h2>
          Turning Visions Into
          <span> Successful Brands</span>
        </h2>

        <p className="trusted-description">
          We collaborate with startups, growing businesses and established
          brands to create memorable digital experiences that drive measurable
          results.
        </p>
      </div>

      <div className="trusted-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
