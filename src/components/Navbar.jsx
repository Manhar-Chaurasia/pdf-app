import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
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
