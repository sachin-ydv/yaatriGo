import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">yaatriGo</div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#" className="search-link">Search Journey</a>
        <a href="#">Contact Us</a>
        <a href="#" className="profile-link">
          <i className="fas fa-user"></i> <span className="profile-text">Profile</span>
        </a>
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
