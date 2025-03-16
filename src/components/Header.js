import React, { useState, useEffect } from 'react';
import './styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="https://www.phi.consulting/" className="site-logo">
            <img src="/phi-logo.png" alt="Phi Consulting" />
          </a>
        </div>
        
        <nav className="site-nav">
          <ul>
            <li><a href="https://www.phi.consulting/solutions">Solutions</a></li>
            <li><a href="https://www.phi.consulting/industries">Industries</a></li>
            <li><a href="https://www.phi.consulting/about">About</a></li>
            <li><a href="https://www.phi.consulting/insights">Insights</a></li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <a href="https://calendly.com/raza-rehman/modern_outbound_jam" className="header-button">Book a Call</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
