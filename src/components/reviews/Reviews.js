import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "RaanRuchi Cafe",
    review:
      "Creative Edge transformed our cafe's digital presence. The website perfectly captures our brand and customers love the experience.",
  },
  {
    name: "Swaraj Enterprises",
    review:
      "Professional team with creative ideas and excellent support. Our new website generates significantly more customer inquiries.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-header">
        <span className="review-tag">TESTIMONIALS</span>

        <h2>What Our Clients Say</h2>

        <p>
          Businesses that trusted Creative Edge to bring their vision online.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="stars">★★★★★</div>

            <p className="review-text">"{item.review}"</p>

            <h4>— {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
