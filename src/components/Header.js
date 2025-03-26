import React, { useState, useEffect } from "react";
import "./styles/Header.css";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="https://www.phi.consulting/" className="site-logo">
            <img src="/phi-logo.png" alt="Phi Consulting" />
          </a>
        </div>

        <nav className="site-nav">
          <ul>
            <li>
              <a href="https://www.phi.consulting/solutions?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links">
                Solutions
              </a>
            </li>
            <li>
              <a href="https://www.phi.consulting/industries?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links">
                Industries
              </a>
            </li>
            <li>
              <a href="https://www.phi.consulting/about?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links">
                About
              </a>
            </li>
            <li>
              <a href="https://www.phi.consulting/insights?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links">
                Insights
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a
            href="https://calendly.com/raza-rehman/modern_outbound_jam"
            className="header-button"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
