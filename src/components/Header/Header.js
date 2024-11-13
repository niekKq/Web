import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';
import Toggle from '../ThemeSwitch/Toggle';

function Header({ theme, toggleTheme }) {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <nav className="topnav">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="/"><i className="fa-solid fa-house-user"></i> Dashboard</a></li>
          <li><a href="/projects"><i className="fa-solid fa-book"></i> Projects</a></li>
        </ul>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;