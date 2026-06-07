import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-heading">
          <span></span>
          <p>ABOUT US</p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <h2>
              We Create Digital
              <br />
              Experiences That
              <span> Elevate Brands.</span>
            </h2>
          </div>

          <div className="about-right">
            <p>
              At Creative Edge, we believe great design goes beyond aesthetics.
              Every interface, interaction and visual identity is carefully
              crafted to communicate purpose, build trust and drive meaningful
              growth.
            </p>

            <p>
              Our team combines strategic thinking with modern design principles
              to deliver experiences that feel effortless, memorable and
              impactful.
            </p>

            <a href="#contact">Let's Build Together →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
