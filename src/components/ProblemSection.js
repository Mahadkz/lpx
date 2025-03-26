import React from 'react';
import './styles/ProblemSection.css';

function ProblemSection() {
  return (
    <section className="problem-section">
      {/* Visual depth elements */}
      <div className="depth-layer depth-layer-1"></div>
      <div className="depth-layer depth-layer-2"></div>
      <div className="depth-layer depth-layer-3"></div>
      
      {/* Static decorative elements */}
      <div className="problem-decorative-star-1">✧</div>
      <div className="problem-decorative-star-2">✦</div>
      <div className="problem-decorative-dot">•</div>
      <div className="problem-decorative-circle"></div>
      <div className="problem-decorative-plus">+</div>
      
      {/* New static foreground elements */}
      <div className="foreground-element diagonal-line-1"></div>
      <div className="foreground-element diagonal-line-2"></div>
      <div className="foreground-element square-box-1"></div>
      <div className="foreground-element square-box-2"></div>
      <div className="foreground-element corner-accent top-left"></div>
      <div className="foreground-element corner-accent bottom-right"></div>
      <div className="foreground-element dotted-pattern"></div>
      <div className="foreground-element bracket-element left-bracket"></div>
      <div className="foreground-element bracket-element right-bracket"></div>
      
      <div className="problem-container">
        {/* Abstract tech element */}
        <div className="abstract-tech-element">
          <div className="tech-line"></div>
          <div className="tech-line"></div>
          <div className="tech-dot"></div>
        </div>
        
        <div className="problem-header">
          
          <h2>The FreightTech Industry is Stuck in a <span className="highlight-text">Sales Bottleneck.</span></h2>
        </div>
        
        <div className="pain-points-container">
          <div className="pain-point">
            <div className="pain-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
            <p>Cold outbound isn't converting, and your inbound funnel isn't enough.</p>
          </div>
          
          <div className="pain-point">
            <div className="pain-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
            <p>Deals die in endless follow-ups.</p>
          </div>
          
          <div className="pain-point">
            <div className="pain-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
            <p>Sales cycles drag while competitors move faster.</p>
          </div>
          
          <div className="pain-point">
            <div className="pain-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
            <p>Brokers, carriers, and shippers hesitate to pull the trigger.</p>
          </div>
          
          <div className="pain-point">
            <div className="pain-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
            <p>Hiring and training top-tier sales talent - A slow, expensive nightmare.</p>
          </div>
        </div>
        
        <div className="truth-statement">
          {/* Static corner accents */}
          <div className="statement-corner top-left"></div>
          <div className="statement-corner top-right"></div>
          <div className="statement-corner bottom-left"></div>
          <div className="statement-corner bottom-right"></div>
          
          <p>Here's the truth: <strong>Great operations don't close deals. Great sales systems do.</strong></p>
        </div>
        
        <div className="problem-cta-container">
          {/* Static CTA decorative elements */}
          <div className="cta-element cta-arrow"></div>
          <div className="cta-element cta-dot"></div>
          <div className="cta-element cta-square"></div>
          
          <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="primary-cta problem-cta">
            Turn 'Maybe Later' Into 'Need It Now'
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
