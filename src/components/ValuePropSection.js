import React from 'react';
import './styles/ValuePropSection.css';

function ValuePropSection() {
  return (
    <section className="value-prop-section">
      {/* Background elements */}
      <div className="vp-bg-element vp-bg-gradient"></div>
      <div className="vp-bg-element vp-bg-dots"></div>
      <div className="vp-bg-element vp-bg-lines"></div>
      
      <div className="vp-container">
        <div className="vp-header">
          <div className="vp-title-accent"></div>
          <h2>How We <span className="vp-highlight">Transform</span> Your Sales Process</h2>
          <div className="vp-subtitle">A partnership that delivers real value from day one</div>
        </div>
        
        {/* Visual timeline approach instead of cards */}
        <div className="vp-timeline">
          <div className="vp-timeline-line"></div>
          
          <div className="vp-timeline-item">
            <div className="vp-timeline-icon">
              <div className="vp-icon-pulse"></div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
            <div className="vp-timeline-content">
              <h3>Deep Industry Analysis</h3>
              <p>We don't just implement—we research your market, competitors, and customers to identify unique opportunities others miss.</p>
              <div className="vp-timeline-tag">Week 1</div>
            </div>
          </div>
          
          <div className="vp-timeline-item">
            <div className="vp-timeline-icon">
              <div className="vp-icon-pulse"></div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" />
                <path d="M3.27002 7.00001L12 12L20.73 7.00001" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <div className="vp-timeline-content">
              <h3>Sales Process Engineering</h3>
              <p>Custom outreach sequences, messaging frameworks, and objection handling guides tailored to your exact market position.</p>
              <div className="vp-timeline-tag">Week 2</div>
            </div>
          </div>
          
          <div className="vp-timeline-item">
            <div className="vp-timeline-icon">
              <div className="vp-icon-pulse"></div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8L12 12L16 14" />
              </svg>
            </div>
            <div className="vp-timeline-content">
              <h3>Active Deal Management</h3>
              <p>We personally engage with prospects, handle objections, and drive deals to close—not just hand you a playbook.</p>
              <div className="vp-timeline-tag">Ongoing</div>
            </div>
          </div>
          
          <div className="vp-timeline-item">
            <div className="vp-timeline-icon">
              <div className="vp-icon-pulse"></div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="vp-timeline-content">
              <h3>Measurable Results</h3>
              <p>Success measured in revenue, not activities. We're accountable for pipeline growth and closed deals—that's our guarantee.</p>
              <div className="vp-timeline-tag">Every Month</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced interactive value showcase */}
        <div className="vp-showcase">
          <div className="vp-metrics-container">
            <div className="vp-metric">
              <div className="vp-metric-circle">
                <svg viewBox="0 0 36 36">
                  <path className="vp-circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" />
                  <path className="vp-circle-fill"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" stroke-dasharray="80, 100" />
                </svg>
                <span className="vp-metric-value">80%</span>
              </div>
              <div className="vp-metric-label">Higher Response Rates</div>
            </div>
            
            <div className="vp-metric">
              <div className="vp-metric-circle">
                <svg viewBox="0 0 36 36">
                  <path className="vp-circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" />
                  <path className="vp-circle-fill vp-circle-fill-alt"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" stroke-dasharray="65, 100" />
                </svg>
                <span className="vp-metric-value">65%</span>
              </div>
              <div className="vp-metric-label">Shorter Sales Cycles</div>
            </div>
            
            <div className="vp-metric">
              <div className="vp-metric-circle">
                <svg viewBox="0 0 36 36">
                  <path className="vp-circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" />
                  <path className="vp-circle-fill vp-circle-fill-third"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke-width="3" stroke-dasharray="95, 100" />
                </svg>
                <span className="vp-metric-value">95%</span>
              </div>
              <div className="vp-metric-label">Deal Pipeline Growth</div>
            </div>
          </div>
        </div>
        
        <div className="vp-cta-container">
          <p className="vp-cta-text">Stop wasting time with sales approaches that don't deliver results</p>
          <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="primary-cta vp-cta">
            Get Your Custom Sales Strategy
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ValuePropSection;
