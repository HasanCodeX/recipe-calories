import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">Recipe Calories</h1>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#search">Search</a>
        </li>
      </ul>

      {/* Search and User Icon */}
      <div className="search-user">
        <input type="text" placeholder="Search" className="search-input" />
        <i className="search-icon">🔍</i>
        <i className="user-icon">👤</i>
      </div>
    </nav>
  );
};

export default Navbar;
