import React from "react";
import ReactDOM from "react";
const root = ReactDOM.createRoot(document.getElementById("rootr"));

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo.png" className="nav-logo"></img>
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
    <footers>
      <small>@ 2021 Matt development. All rights reserved.</small>
    </footers>
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

root.render();
