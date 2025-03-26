import React from 'react';
import './styles/PhiFixSection.css';

function PhiFixSection() {
  return (
    <section className="phi-fix-section">
      {/* Visual depth elements */}
      <div className="phi-fix-layer depth-layer-1"></div>
      <div className="phi-fix-layer depth-layer-2"></div>
      
      {/* Static decorative elements */}
      <div className="phi-fix-decorative phi-decorative-star-1">✧</div>
      <div className="phi-fix-decorative phi-decorative-star-2">✦</div>
      <div className="phi-fix-decorative phi-decorative-circle"></div>
      
      {/* Static foreground elements */}
      <div className="phi-foreground diagonal-line"></div>
      <div className="phi-foreground square-box"></div>
      <div className="phi-foreground corner-accent"></div>
      
      <div className="phi-fix-container">
        <div className="phi-fix-header">
          <h2>We Don't Just Fix Sales. <span className="highlight-text">We Build Sales Machines.</span></h2>
          <p className="phi-fix-intro">
            At <strong>Phi Consulting</strong>, we've spent thousands of hours in conversations with <strong>your customers</strong>—uncovering exactly what makes them buy. We embed as your GTM team, owning the entire revenue process—from prospecting to closed deals.
          </p>
        </div>
        
        <div className="phi-usp-label">Here's What You Get:</div>
        
        <div className="phi-usp-grid">
          <div className="phi-usp-card">
            <div className="phi-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="phi-card-content">
              <h3>Your Own Plug-and-Play Sales Team</h3>
              <p>No hiring, no training. Just immediate execution by FreightTech-trained SDRs and AEs.</p>
            </div>
          </div>
          
          <div className="phi-usp-card">
            <div className="phi-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8C19.55 8 18.74 9.4 19.07 10.77L15.12 14.37C14.5 13.94 13.73 13.75 13 13.75C12.27 13.75 11.5 13.94 10.89 14.37L8.17 11.29C8.55 10.77 8.44 10.01 7.9 9.57C7.42 9.17 6.75 9.21 6.35 9.65L2.67 6.23C3 4.86 2.21 3.5 0.756 3.5C-0.744 3.5-1.5 5-0.756 6.35C0.035 7.76 1.93 7.77 2.73 6.35L6.16 9.55C5.87 11.04 7.57 12.22 8.85 11.29L11.55 14.44C10.64 15.98 11.91 17.95 13.8 17.95C15.28 17.95 16.39 16.37 15.73 15L19.77 11.31C21.45 12.08 23.09 10.17 21.93 8.81C21.71 8.3 21.39 8 21 8Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="phi-card-content">
              <h3>No More Guesswork, Just Revenue</h3>
              <p>We build and optimize your outbound funnel to generate predictable, scalable growth.</p>
            </div>
          </div>
          
          <div className="phi-usp-card">
            <div className="phi-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM14 15.8C14 16.15 13.55 16.32 13.28 16.08L10.5 13.5C10.22 13.26 10 12.71 10 12.34V8.5C10 8.22 10.22 8 10.5 8H13.5C13.78 8 14 8.22 14 8.5V15.8Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="phi-card-content">
              <h3>Freight & Logistics Sales Expertise</h3>
              <p>Unlike generic sales firms, we specialize in logistics, ensuring higher conversion rates and faster deal cycles.</p>
            </div>
          </div>
          
          <div className="phi-usp-card">
            <div className="phi-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="phi-card-content">
              <h3>No Dead Leads, No Lost Deals</h3>
              <p>We track, follow up, and push deals across the finish line.</p>
            </div>
          </div>
        </div>
        
        {/* Curved arrows pointing to CTA */}
        <div className="curved-arrow-container">
          <svg className="curved-arrow arrow-left" width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C40 10 80 10 110 70" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M100 70L110 70L110 60" stroke="currentColor" strokeWidth="2"/>
          </svg>
          
          <svg className="curved-arrow arrow-right" width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M110 10C80 10 40 10 10 70" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M20 70L10 70L10 60" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* CTA section */}
        <div className="phi-fix-cta-container">
          <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="primary-cta phi-fix-cta">
            Your Solution is Better. Time to Sell Like It. →
          </a>
          
          {/* Static decorative elements near CTA */}
          <div className="cta-accent cta-accent-1"></div>
          <div className="cta-accent cta-accent-2"></div>
        </div>
      </div>
    </section>
  );
}

export default PhiFixSection;
