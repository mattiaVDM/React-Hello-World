import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

root.render(<App />);
