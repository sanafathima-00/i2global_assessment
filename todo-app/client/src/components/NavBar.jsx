import React from "react";
import "./NavBar.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo-text">focus</span>
        <div className="logo-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot blue"></span>
          <span className="dot green"></span>
        </div>
      </div>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} style={{ marginRight: '75px' }}>
          {theme === "dark-mode" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
