import React from "react";
import { Link } from "react-router-dom";
import phiLogo from "../assets/phi-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Update the logo link with UTM parameters */}
        <a
          href="https://www.phi.consulting/?utm_source=landing_page&utm_medium=click&utm_campaign=outbound_links"
          className="site-logo"
        >
          <img src={phiLogo} alt="Phi Consulting" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
