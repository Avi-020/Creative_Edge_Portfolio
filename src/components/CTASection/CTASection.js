import React, { useState } from "react";
import "./CTASection.css";

function CTASection() {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    date: "",
    time: "",
  });

  const whatsappNumber = "919067661322";

  const handleInquiry = () => {
    const message = `
Hello Creative Edge,

I would like a free consultation regarding my project.

Please contact me.
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleMeeting = () => {
    const message = `
New Meeting Request

Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}

Date: ${form.date}
Time: ${form.time}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setShowModal(false);
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-left">
          <span>CREATIVE EDGE</span>

          <h2>
            Let's Build
            <br />
            Something
            <br />
            Remarkable.
          </h2>
        </div>

        <div className="cta-right">
          <p>
            Whether you're launching a business, refreshing your brand, or
            building a website, we're here to help.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleInquiry}>
              Free Inquiry
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowModal(true)}
            >
              Schedule A Meeting
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="booking-modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ×
            </button>

            <div className="modal-left">
              <h2>30 Minute Discovery Call</h2>

              <ul>
                <li>Website Consultation</li>
                <li>Brand Strategy</li>
                <li>Marketing Discussion</li>
              </ul>
            </div>

            <div className="modal-right">
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Business Name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    business: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="date"
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />

              <select
                onChange={(e) =>
                  setForm({
                    ...form,
                    time: e.target.value,
                  })
                }
              >
                <option>Select Time</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
                <option>04:00 PM</option>
              </select>

              <button className="schedule-btn" onClick={handleMeeting}>
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CTASection;
