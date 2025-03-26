import React, { useState } from "react";
import "./styles/HeroContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    teamSize: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your new deployed script URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzQWiinYu35iVh97zHP6Sc2Gm6JwSbGxEg5AJIQIZGq1q-zA8mmMOQCFnOdNNYKsQnv/exec";

    try {
      console.log("Attempting to submit form with data:", formData);

      // Using no-cors to avoid CORS issues with Google Apps Script
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Important to avoid CORS errors
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form submission request completed");

      // Since we used no-cors, we assume success if no error is thrown
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        revenue: "",
        teamSize: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      {/* Form accent elements */}
      <div className="form-accent form-accent-1"></div>

      <div className="form-header">
        <h3 className="form-title">Stop Pitching. Start Closing.</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${formData.name ? "has-value" : ""}`}>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
        </div>

        <div className={`form-group ${formData.email ? "has-value" : ""}`}>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form-label">
            Work Email
          </label>
        </div>

        <div className={`form-group ${formData.company ? "has-value" : ""}`}>
          <input
            type="text"
            id="company"
            name="company"
            className="form-input"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <label htmlFor="company" className="form-label">
            Company Name
          </label>
        </div>

        <div className={`form-group ${formData.revenue ? "has-value" : ""}`}>
          <select
            id="revenue"
            name="revenue"
            className="form-select"
            value={formData.revenue}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="Under $1M">Under $1M</option>
            <option value="$1M - $5M">$1M - $5M</option>
            <option value="$5M - $10M">$5M - $10M</option>
            <option value="$10M - $50M">$10M - $50M</option>
            <option value="$50M+">$50M+</option>
          </select>
          <label htmlFor="revenue" className="form-label">
            Annual Revenue
          </label>
        </div>

        <div className={`form-group ${formData.teamSize ? "has-value" : ""}`}>
          <select
            id="teamSize"
            name="teamSize"
            className="form-select"
            value={formData.teamSize}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
          <label htmlFor="teamSize" className="form-label">
            Team Size
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          <span>
            {isSubmitting ? "Sending..." : "Get Your Pipeline Strategy"}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {submitStatus === "success" && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "500",
            }}
          >
            Thanks! We'll be in touch soon.
          </p>
        )}

        {submitStatus === "error" && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "500",
            }}
          >
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="form-testimonial">
        <div className="testimonial-stars">★★★★★</div>
        <div className="testimonial-quote">
          "$14M revenue increase in the first year."
        </div>
        <div className="testimonial-author">
          {" "}
          <p>Tapan Chaudhari,</p>
          <p>— CEO TruckX.</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
