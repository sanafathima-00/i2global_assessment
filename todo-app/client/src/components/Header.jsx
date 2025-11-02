import React from "react";
import "./Header.css";

const Header = ({ completed, total }) => {
  return (
    <header className="header">
      <h1 className="header-title" style={{ marginTop: '75px' }}>
        Work To-Dos ({completed}/{total} completed)
      </h1>
    </header>
  );
};

export default Header;
