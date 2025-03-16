import React from 'react';
import './styles/PitchSection.css';

function PitchSection() {
  // Function to scroll to the contact form in the hero section
  const scrollToContactForm = () => {
    const contactForm = document.querySelector('.contact-form-container');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="pitch-section">
      {/* Background elements */}
      <div className="pitch-bg-element pitch-bg-gradient"></div>
      <div className="pitch-bg-element pitch-bg-pattern"></div>
      <div className="pitch-bg-element pitch-accent-1"></div>
      <div className="pitch-bg-element pitch-accent-2"></div>
      
      {/* Enhanced decorative elements */}
      <div className="pitch-decorative star-1">✦</div>
      <div className="pitch-decorative star-2">✧</div>
      <div className="pitch-decorative star-3">★</div>
      <div className="pitch-decorative star-4">✧</div>
      <div className="pitch-decorative dot">•</div>
      <div className="pitch-decorative circle"></div>
      <div className="pitch-decorative triangle"></div>
      <div className="pitch-decorative squiggle"></div>
      <div className="pitch-decorative dash-line"></div>
      
      <div className="pitch-container">
        {/* Added glowing accent */}
        <div className="pitch-top-accent"></div>
        
        <div className="pitch-badge">YOUR PATH TO REVENUE GROWTH</div>
        
        <h2 className="pitch-heading">
          Ready to Transform Your <span className="pitch-highlight">FreightTech Sales?</span>
        </h2>
        
        <div className="pitch-card">
          {/* Added corner accents */}
          <div className="pitch-card-corner top-left"></div>
          <div className="pitch-card-corner top-right"></div>
          <div className="pitch-card-corner bottom-left"></div>
          <div className="pitch-card-corner bottom-right"></div>
          
          <div className="pitch-card-content">
            <div className="key-benefits">
              <div className="key-benefit">
                <div className="benefit-checkmark">✓</div>
                <div className="benefit-content">
                  <p className="benefit-title">Proven System</p>
                  <p className="benefit-desc">Launch top-tier outbound in 21 days</p>
                </div>
              </div>
              
              <div className="key-benefit">
                <div className="benefit-checkmark">✓</div>
                <div className="benefit-content">
                  <p className="benefit-title">Zero Risk</p>
                  <p className="benefit-desc">Guaranteed results or you don't pay</p>
                </div>
              </div>
              
              <div className="key-benefit">
                <div className="benefit-checkmark">✓</div>
                <div className="benefit-content">
                  <p className="benefit-title">Industry Expertise</p>
                  <p className="benefit-desc">Specialized in freight tech & logistics</p>
                </div>
              </div>
            </div>
            
            <div className="social-proof-bar">
              <div className="proof-item customer-count">
                <span className="proof-label-top">Trusted By</span>
                <span className="proof-number">30+</span>
                <span className="proof-label">FreightTech Leaders</span>
              </div>
              
              <div className="vertical-divider"></div>
              
              <div className="proof-item testimonial-snippet">
                <div className="quote-icon">"</div>
                <div className="snippet-content">
                  <p className="snippet-text">Phi delivered more meetings in 3 weeks than our entire SDR team did in 3 months</p>
                  <p className="snippet-author">— VP of Sales, DataTruck</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pitch-card-scarcity">
            {/* Enhanced scarcity section with animated elements */}
            <div className="scarcity-pulse-container">
              <div className="scarcity-badge">
                <div className="enhanced-clock-wrapper">
                  <div className="clock-icon">
                    <div className="clock-face"></div>
                    <div className="clock-center"></div>
                    <div className="clock-hour-hand"></div>
                    <div className="clock-minute-hand"></div>
                    <div className="clock-second-hand"></div>
                    <div className="clock-markings"></div>
                  </div>
                  <div className="clock-urgency-ring"></div>
                </div>
                <span className="scarcity-text">Only <strong>2 spots</strong> remaining this quarter</span>
                <div className="countdown-indicator">
                  <span className="countdown-dot"></span>
                  <span className="countdown-dot"></span>
                  <span className="countdown-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pitch-cta-section">
          {/* Added CTA accent elements */}
          <div className="cta-accent cta-accent-1"></div>
          <div className="cta-accent cta-accent-2"></div>
          
          <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="pitch-primary-cta">
            <span className="cta-text">Book Your Revenue Strategy Session</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <div className="secondary-cta-container">
            <button onClick={scrollToTop} className="pitch-secondary-cta">
              <span>Have questions?</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <p className="pitch-guarantee">No commitment • Free consultation • Performance-based pricing</p>
        </div>
      </div>
    </section>
  );
}

export default PitchSection;
