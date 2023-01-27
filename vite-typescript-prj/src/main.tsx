import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo"></img>
        <h3 className="nav-title">HearthstoneBuilder</h3>
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
      <h1 className="page-title"> Reasons why i will learn React</h1>
      <ul>
        <li>I want to learn React to get better at functional programming</li>
        <li>I want to learn React to build projects with it</li>
        <li>I want to learn React to be more hirable</li>
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
