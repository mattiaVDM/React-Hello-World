import React from "react";
import { createRoot } from "react-dom/client";
import hearthstoneLogo from "./images/logo.png";
import "./style.css";
const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={hearthstoneLogo} alt="logo" className="nav-logo"></img>
        <ul className="nav-items">
          <li>- Pricing</li>
          <li>- About</li>
          <li>- Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1> Reasons why i will learn React</h1>
      <ul>
        <li>- I want to learn React to get better at functional programming</li>
        <li>- I want to learn React to build projects with it</li>
        <li>- I want to learn React to be more hirable</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>@ 2021 Matt development. All rights reserved.</small>
    </footer>
  );
}

function PageToRender() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<PageToRender />);
