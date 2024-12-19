import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.png"; // Assuming you have a logo image file

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://image.similarpng.com/very-thumbnail/2021/05/Modern-logo-design-template-on-transparent-PNG.png"
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-right">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/" className="navbar-link">
            PDF List
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
