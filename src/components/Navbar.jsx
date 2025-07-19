import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">yaatriGo</div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/SearchJourney" className="search-link">
          Search Journey
        </NavLink>
        <NavLink to="/ContactUs" className="contact-link">
          Contact Us
        </NavLink>
        <NavLink to="/ProfilePage" className="profile-link">
          <i className="fas fa-user"></i>{' '}
          <span className="profile-text">Profile</span>
        </NavLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
