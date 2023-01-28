import React from "react";
import logo from "../assets/logo.png";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="nav">
        <img src={logo} className="nav--icon"></img>
        <h3 className="nav--logo_text">HearthstoneBuilder</h3>
        <ul className="nav--items">
          <li>Guide</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
