import React, { useState } from "react";
import logo from "../images/logo3.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="logo">
        <a href="#" className="logo">
          <img className="logo" src={logo} alt="" />
        </a>
      </div>

      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/priorities">Our Priority</Link>
        </li>
        <li>
          <Link to="/involvement">Your Involvement</Link>
        </li>

        <div className="btnheader">
          <a className="flexbtns" href="/">
            Donate
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
