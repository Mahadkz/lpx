import React from 'react';
import './styles/Hero.css';
import ContactForm from './ContactForm';
import AnimatedGrid from './AnimatedGrid';

function Hero() {
  return (
    <section className="hero-section">
      {/* Animated Grid Background */}
      <AnimatedGrid />
      
      {/* Enhanced background elements */}
      <div className="hero-bg-element hero-bg-gradient"></div>
      <div className="hero-bg-element hero-bg-pattern"></div>
      <div className="hero-bg-element hero-accent-1"></div>
      <div className="hero-bg-element hero-accent-2"></div>
      
      {/* Enhanced decorative elements */}
      <div className="hero-decorative hero-star-1"></div>
      <div className="hero-decorative hero-star-2"></div>
      <div className="hero-decorative hero-circle"></div>
      <div className="hero-decorative hero-dot"></div>
      <div className="hero-decorative hero-shape-1"></div>
      <div className="hero-decorative hero-shape-2"></div>
      <div className="hero-decorative hero-line-1"></div>
      <div className="hero-decorative hero-line-2"></div>
      <div className="hero-decorative hero-skew-rect"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">RESULTS-DRIVEN FREIGHT TECH GROWTH</div>
          
          <h1 className="hero-title">
            <span className="title-line">You Built</span>
            <span className="title-line"><span className="title-highlight">the Tech.</span></span>
            <span className="title-line">We Build</span>
            <span className="title-line"><span className="title-highlight">the Pipeline.</span></span>
          </h1>
          
          <p className="hero-subtitle">
            We help freight tech companies <strong>scale faster</strong> and <strong>reduce CAC</strong> with 
            specialist freight SDRs that deliver qualified pipeline in as little as <strong>21 days</strong>.
          </p>
          
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value">3X</span>
              <span className="metric-label">PIPELINE GROWTH</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value">86%</span>
              <span className="metric-label">COST SAVINGS</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value revenue-text">$14M</span>
              <span className="metric-label">REVENUE INCREASE</span>
            </div>
          </div>
          
          <div className="hero-cta-container">
            <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="primary-cta hero-cta">
              <span>Book Your Strategy Session</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
