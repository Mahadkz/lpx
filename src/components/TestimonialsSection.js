import React, { useState, useEffect } from "react";
import "./styles/TestimonialsSection.css";

function TestimonialsSection() {
  // State for managing testimonial slides when we have multiple
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of testimonials for future expansion
  const testimonials = [
    {
      quote:
        "Phi Consulting exceeded our expectations, delivering our project on time with exceptional communication and adaptability. Their commitment to improving our processes and workflow was remarkable. Highly recommended for any tech startup seeking to accelerate growth and innovation.",
      author: "Head of Sales & Business Development",
      position: "AtoB Financials",
      image: null, // Can add image paths in the future
    },
    {
      quote:
        "Over the past three years, my experience with Phi Consulting has been exceptional. They've consistently demonstrated the ability to quickly scale up with high-caliber Go-To-Market personnel as needed. Working with Phi feels more like a partnership than a contractual relationship, thanks to their collaborative and responsive approach.",
      author: "Brendan Meuse",
      position: "VP Revenue Operations - Digital Ocean",
      image: null,
    },
    {
      quote:
        "Phi isn't just a service provider—they became our on-demand revenue team. Within weeks, we saw a complete turnaround in our outbound motion.",
      author: "Shohruh Rahmanov",
      position: "CEO, DataTruck",
      image: null, // Can add image paths in the future
    },
  ];

  // Optional: Auto-rotate testimonials when we have multiple
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Changed from 8000 to 4000 ms (4 seconds)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      {/* Simplified background elements */}
      <div className="testimonial-bg-element bg-gradient"></div>
      <div className="testimonial-bg-element bg-pattern"></div>
      <div className="testimonial-bg-element bg-accent-1"></div>
      <div className="testimonial-bg-element bg-accent-2"></div>

      {/* Simple decorative elements */}
      <div className="testimonial-decorative quote-mark left-quote">❝</div>
      <div className="testimonial-decorative quote-mark right-quote">❞</div>
      <div className="testimonial-decorative testimonial-star-1">✦</div>
      <div className="testimonial-decorative testimonial-star-2">✧</div>
      <div className="testimonial-decorative testimonial-circle"></div>

      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>What Freight & Logistics Leaders Say About Phi</h2>
        </div>

        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <div className="testimonial-content">
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author-info">
                    {testimonial.image && (
                      <div className="testimonial-author-image">
                        <img src={testimonial.image} alt={testimonial.author} />
                      </div>
                    )}
                    <div className="testimonial-author-details">
                      <p className="testimonial-author-name">
                        {testimonial.author}
                      </p>
                      <p className="testimonial-author-position">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots for when we have multiple testimonials */}
          {testimonials.length > 1 && (
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="brands-trust-section">
          <p className="brands-heading">FreightTech Leaders Trust Us</p>
          <div className="trust-cta-container">
            <a
              href="https://calendly.com/raza-rehman/modern_outbound_jam"
              className="cta-button trust-cta"
            >
              <span>Join Them Now</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
