import React from "react";
import "./styles/CaseStudiesSection.css";

function CaseStudiesSection() {
  return (
    <section className="case-studies-section">
      {/* Background elements */}
      <div className="case-bg-element case-bg-gradient"></div>
      <div className="case-bg-element case-bg-pattern"></div>

      {/* Decorative elements */}
      <div className="case-decorative case-decorative-circle-1"></div>
      <div className="case-decorative case-decorative-circle-2"></div>
      <div className="case-decorative case-decorative-line"></div>
      <div className="case-decorative case-decorative-dots"></div>
      <div className="case-decorative case-decorative-star-1">✦</div>
      <div className="case-decorative case-decorative-star-2">✧</div>

      <div className="case-container">
        <div className="case-header">
          <h2>
            Our Results?{" "}
            <span className="case-highlight">Proof Beats Promises.</span>
          </h2>
        </div>

        <div className="case-studies-grid">
          {/* Card 1 - Revenue - Now as link */}
          <a
            href="http://phi.consulting/post/phi-consulting-scaled-datatruck-case-study?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links
"
            className="case-card"
          >
            <div className="case-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 14.5L5 18L18.5 18M8.5 14.5L15.5 7.5L18.5 10.5M8.5 14.5L10.5 12.5L13.5 15.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="case-card-content">
              <div className="case-metric">$1M+ ARR</div>
              <p className="case-description">
                Scaled from $200k to $1M+ ARR in Just 6 Months
              </p>
              <div className="case-company-badge">
                <div className="case-icon-truck">🤖</div>
                <span>Workforce Automation Tool</span>
              </div>
            </div>
          </a>

          {/* Card 2 - Sales Cycle - Now as link */}
          <a
            href="https://www.phi.consulting/post/phi-consulting-atob-case-study?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links"
            className="case-card"
          >
            <div className="case-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="case-card-content">
              <div className="case-metric">6% Marketshare</div>
              <p className="case-description">
                Helped reduce CAC by 30% and incrreased CLTV by 40%
              </p>
              <div className="case-company-badge">
                <div className="case-icon-chart">📈</div>
                <span>Fleet Payment Startup</span>
              </div>
            </div>
          </a>

          {/* Card 3 - Pipeline Growth - Now as link */}
          <a
            href="https://www.phi.consulting/post/how-phi-helped-a-series-b-financial-services-startup-achieve-product-market-fit?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links"
            className="case-card"
          >
            <div className="case-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5M13 5H19M5 5H11M7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12M7 12H3M21 12H9M15 19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19M15 19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19M15 19H10M22 19H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="case-card-content">
              <div className="case-metric">Product Market Fit</div>
              <p className="case-description">
                Helped achieve PMF, validate their messaging and shortened sales
                cycle by 30%
              </p>
              <div className="case-company-badge">
                <div className="case-icon-bolt">💰</div>
                <span>Fintech Startup</span>
              </div>
            </div>
          </a>

          {/* Card 4 - CAC Reduction - Now as link */}
          <a
            href="https://www.phi.consulting/post/truckx-scales-from-2m-to-16m-arr-how-phi-consulting-engineered-a-freighttech-sales-transformation?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links"
            className="case-card"
          >
            <div className="case-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6v12m-8-6h16m-2-8H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="case-card-content">
              <div className="case-metric">$14M ARR</div>
              <p className="case-description">
                Fixed Broken Sales Processes and added $14M ARR in one year
              </p>
              <div className="case-company-badge">
                <div className="case-icon-money">🚛</div>
                <span>Freight IoT Startup</span>
              </div>
            </div>
          </a>
        </div>

        <div className="case-cta-container">
          <a
            href="https://calendly.com/raza-rehman/modern_outbound_jam"
            className="primary-cta case-cta"
          >
            Pay for results, not plans
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
    </section>
  );
}

export default CaseStudiesSection;
