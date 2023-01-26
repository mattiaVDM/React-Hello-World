## Components

Create a page of your own using a custom Page component

```js
import React from "react";
import ReactDOM from "react";
const root = ReactDOM.createRoot(document.getElementById("rootr"));
function PageToRender() {
  return (
    <>
      <header>
        <nav>
          <img src="./logo.png" width="40px" />
        </nav>
      </header>
      <h1> Reasons why i will learn React</h1>
      <ul>
        <li>- I want to learn React to get better at functional programming</li>
        <li>- I want to learn React to build projects with it</li>
        <li>- I want to learn React to be more hirable</li>
      </ul>
      <footers>
        <small>@ 2021 Matt development. All rights reserved.</small>
      </footers>
    </>
  );
}
root.render();
```
