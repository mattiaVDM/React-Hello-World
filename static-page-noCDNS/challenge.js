import React from "react";
import ReactDOM from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const page = (
  <div>
    <h1>Hearthstone Card Picker</h1>
    <img src="./logo.png" width="40px"></img>
    <h3>
      This is an Hearthston card picker that will build a random deck for your
      needs
    </h3>
    <ul>
      <li>- Picks 30 random cards from your collection</li>
      <li>- Decks are built based on the latest patch notes</li>
      <li>- Pick a hero and we will care about the rest</li>
    </ul>
  </div>
);

root.render(page);
