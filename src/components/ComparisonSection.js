import React from "react";
import "./styles/ComparisonSection.css";

function ComparisonSection() {
  return (
    <section className="comparison-section">
      {/* Background elements */}
      <div className="comparison-bg-element bg-gradient"></div>
      <div className="comparison-bg-element bg-pattern"></div>

      {/* New static decorative elements */}
      <div className="comparison-bg-element bg-circle-1"></div>
      <div className="comparison-bg-element bg-circle-2"></div>
      <div className="comparison-bg-element bg-line-1"></div>
      <div className="comparison-bg-element bg-line-2"></div>
      <div className="comparison-bg-element bg-dots-cluster"></div>

      {/* Additional static decorative elements */}
      <div className="comparison-bg-element decorative-icon decorative-icon-1">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12H4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 4V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="comparison-bg-element decorative-icon decorative-icon-2">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="comparison-bg-element decorative-shape shape-square"></div>
      <div className="comparison-bg-element decorative-shape shape-triangle"></div>
      <div className="comparison-bg-element decorative-curve curve-left"></div>
      <div className="comparison-bg-element decorative-curve curve-right"></div>

      {/* SVG decorative elements */}
      <div className="comparison-bg-element bg-svg bg-svg-grid">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="130"
            height="130"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="10"
            y1="50"
            x2="140"
            y2="50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="10"
            y1="90"
            x2="140"
            y2="90"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="140"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="90"
            y1="10"
            x2="90"
            y2="140"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="comparison-bg-element bg-svg bg-svg-chart">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10,110 L110,110" stroke="currentColor" strokeWidth="2" />
          <path d="M10,110 L10,10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M10,90 L110,30"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <circle cx="30" cy="70" r="4" fill="currentColor" />
          <circle cx="50" cy="60" r="4" fill="currentColor" />
          <circle cx="70" cy="50" r="4" fill="currentColor" />
          <circle cx="90" cy="30" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="comparison-bg-element bg-svg bg-svg-brackets">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30,10 Q10,50 30,90" stroke="currentColor" strokeWidth="2" />
          <path d="M70,10 Q90,50 70,90" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="comparison-container">
        <div className="comparison-header">
          <h2>
            In-House Burn Rate <span className="comparison-vs">vs</span>{" "}
            <span className="highlight-text">Phi's Scalable Execution</span>
          </h2>
          <p className="comparison-subtitle">
            In-house teams cost 2.5x more and scale 3x slower—partner with Phi
            Consulting for Guaranteed ROI
          </p>
        </div>

        {/* Streamlined table design - only 2 columns */}
        <div className="consolidated-table-wrapper">
          {/* Repositioned savings badge */}
          <div className="savings-badge">
            <div className="savings-badge-content">
              <span className="savings-amount">Save $128,400+</span>
              <span className="savings-percent">86% Cost Reduction</span>
            </div>
          </div>

          <div className="column-headers">
            <div className="column-header in-house-header">
              <h3>In-House SDR</h3>
              <div className="total-cost in-house-cost">$150,000+ /yr</div>
            </div>
            <div className="column-header phi-header">
              <h3>Phi Consulting</h3>
              <div className="total-cost phi-cost">$21,600/yr</div>
            </div>
          </div>

          {/* Desktop table - existing table */}
          <table className="consolidated-table desktop-table">
            <tbody>
              {/* Simplified content for more compact display */}
              <tr>
                <td className="negative-cell">
                  Base Salary: <strong>$54K-$75K</strong>
                </td>
                <td className="positive-cell">
                  Base Amount: <strong>Starting at $21,600</strong>{" "}
                  <span className="note">Lowest Entry amount for an SDR</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Benefits & Taxes: <strong>$75K</strong>{" "}
                  <span className="note">healthcare, payroll, 401k</span>
                </td>
                <td className="positive-cell">
                  Benefits & Taxes: <strong>$0</strong>{" "}
                  <span className="note">covered by Phi</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Commission: <strong>$10K-$20K</strong>
                </td>
                <td className="positive-cell">
                  Commission: <strong>$0</strong>{" "}
                  <span className="note">pay for results only</span>
                </td>
              </tr>
              <tr className="highlight-row">
                <td className="negative-cell">
                  Onboarding: <strong>3-4 months</strong>{" "}
                  <span className="note">$18K lost productivity</span>
                </td>
                <td className="positive-cell">
                  Onboarding: <strong>2-3 weeks</strong>{" "}
                  <span className="note">ready by Day 21</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Equipment: <strong>$3K</strong>
                </td>
                <td className="positive-cell">
                  Equipment: <strong>$0</strong>{" "}
                  <span className="note">we use our own</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Recruiting: <strong>$13.5K</strong>{" "}
                  <span className="note">agency fee</span>
                </td>
                <td className="positive-cell">
                  Recruiting: <strong>$0</strong>{" "}
                  <span className="note">ready Day 1</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Management: <strong>$20K</strong>
                </td>
                <td className="positive-cell">
                  Management: <strong>$0</strong>{" "}
                  <span className="note">we handle it all</span>
                </td>
              </tr>
              <tr>
                <td className="negative-cell">
                  Turnover: <strong>$27K</strong>{" "}
                  <span className="note">rehiring every 12-18 months</span>
                </td>
                <td className="positive-cell">
                  Turnover: <strong>$0</strong>{" "}
                  <span className="note">retention guaranteed</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile-specific concise table */}
          <table className="mobile-table">
            <tbody>
              <tr>
                <td className="feature-name">Base Cost</td>
                <td className="in-house-value">$54K-$75K</td>
                <td className="phi-value">$21,600</td>
              </tr>
              <tr>
                <td className="feature-name">Benefits</td>
                <td className="in-house-value">$75K</td>
                <td className="phi-value">$0</td>
              </tr>
              <tr>
                <td className="feature-name">Commission</td>
                <td className="in-house-value">$10K-$20K</td>
                <td className="phi-value">$0</td>
              </tr>
              <tr className="highlight-row">
                <td className="feature-name">Onboarding</td>
                <td className="in-house-value">3-4 months</td>
                <td className="phi-value">2-3 weeks</td>
              </tr>
              <tr>
                <td className="feature-name">Equipment</td>
                <td className="in-house-value">$3K</td>
                <td className="phi-value">$0</td>
              </tr>
              <tr>
                <td className="feature-name">Recruiting</td>
                <td className="in-house-value">$13.5K</td>
                <td className="phi-value">$0</td>
              </tr>
              <tr>
                <td className="feature-name">Management</td>
                <td className="in-house-value">$20K</td>
                <td className="phi-value">$0</td>
              </tr>
              <tr>
                <td className="feature-name">Turnover</td>
                <td className="in-house-value">$27K</td>
                <td className="phi-value">$0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA section without arrows */}
        <div className="comparison-cta-container">
          <p className="comparison-cta-text">
            Your operations move freight. We move revenue.
          </p>
          <a
            href="https://calendly.com/raza-rehman/modern_outbound_jam"
            className="primary-cta comparison-cta"
          >
            Book Free GTM Assessment
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

export default ComparisonSection;
