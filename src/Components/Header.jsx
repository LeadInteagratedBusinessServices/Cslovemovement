import React from "react";
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
     <Navbar/>
      <div className="name">
        <h1>
          <span>Council Spread </span> Love Movement
        </h1>
        <p className="details">
          It is a long established fact that a reader will be distracted by
          thethe readable content off a page when looking at its layout point
          using Lorem Ipsum is that it has. It is a long established fact that a
          reader will be distracted by thethe readable content off a page when
          looking at its layout point using Lorem Ipsum is that it has.
        </p>
        <a href="#" className="flexbtn">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Header;
