import React from 'react';
import './styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      {/* Background elements */}
      <div className="footer-bg-element footer-bg-gradient"></div>
      <div className="footer-bg-element footer-bg-pattern"></div>
      <div className="footer-bg-element footer-bg-accent-1"></div>
      
      {/* Decorative elements */}
      <div className="footer-decorative footer-star-1">✦</div>
      <div className="footer-decorative footer-star-2">✧</div>
      <div className="footer-decorative footer-circle"></div>
      <div className="footer-decorative footer-line"></div>
      
      <div className="footer-container">
        {/* Top section with logo and tagline */}
        <div className="footer-brand">
          <a href="https://www.phi.consulting/">
            <img src="/phi-logo.png" alt="Phi Consulting Logo" className="footer-logo" />
          </a>
          <div className="footer-tagline">Leadership Through Partnership</div>
        </div>
        
        {/* Main footer content */}
        <div className="footer-content">
          {/* Contact information */}
          <div className="footer-section footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <address className="footer-address">
                3046 S Macon Cir,<br />
                Aurora, CO, 80046
              </address>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+12147781233" className="footer-link">+1 (214) 778-1233</a>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7-10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:contact@phi.consulting" className="footer-link">contact@phi.consulting</a>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://www.phi.consulting" className="footer-link">www.phi.consulting</a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="footer-section footer-navigation">
            <h3 className="footer-heading">Site Navigation</h3>
            <ul className="footer-nav-list">
              {/* Home link removed */}
              <li><a href="https://www.phi.consulting/about" className="footer-link">About Us</a></li>
              <li><a href="https://www.phi.consulting/solutions" className="footer-link">Solutions</a></li>
              <li><a href="https://www.phi.consulting/industries" className="footer-link">Industries</a></li>
              <li><a href="https://www.phi.consulting/insights" className="footer-link">Insights</a></li>
              <li><a href="https://www.phi.consulting/contact-us" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Service links */}
          <div className="footer-section footer-services">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-nav-list">
              <li><a href="https://www.phi.consulting/solutions/gtm-strategy" className="footer-link">GTM Strategy</a></li>
              <li><a href="https://www.phi.consulting/solutions/revops" className="footer-link">RevOps</a></li>
              <li><a href="https://www.phi.consulting/solutions/technical-consulting" className="footer-link">Technical Consulting</a></li>
            </ul>
            
            {/* Social Media */}
            <div className="footer-social">
              <h3 className="footer-heading">Connect With Us</h3>
              <div className="footer-social-links">
                <a href="https://www.linkedin.com/company/phisaas" aria-label="LinkedIn" className="social-icon-link">
                  <svg className="social-icon linkedin" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/phisaasllc/" aria-label="Instagram" className="social-icon-link">
                  <svg className="social-icon instagram" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://twitter.com/phisaasllc" aria-label="Twitter" className="social-icon-link">
                  <svg className="social-icon twitter" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="http://www.facebook.com/phisaasllc" aria-label="Facebook" className="social-icon-link">
                  <svg className="social-icon facebook" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and privacy */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Phi Consulting. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="https://www.phi.consulting/privacy-policy" className="footer-link footer-privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
