// Since i imported ReactDOM, it has a method that renders HTML passing a tag and a dome node that i have to select,
// in which i will render the tag
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render more than two elements at once can be done passing an array
root.render(
  <div>
    <HelloWorld></HelloWorld>
    <UnorderedList></UnorderedList>
    <CustomComponent> </CustomComponent>
  </div>
);

function HelloWorld() {
  return <h1 key="hello world">Hello, World!</h1>;
}
function UnorderedList() {
  return (
    <ul key="unordered list">
      <li>First item</li>
      <li>Second Item</li>
    </ul>
  );
}

function CustomComponent() {
  return (
    <div>
      <h1>i'm learning React!</h1>
    </div>
  );
}

// VANILLA JS
// This is an imperative way to code

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
// Here we are logging the element that we created, and it return this:
// <h1 class="header">This is an imperative way to program</h1>;
console.log(h1);

// This scales preatty badly, as i would need a lot on lines of code when i have more elements ro render to the DOM
// JSX is a "flavour" of JS where we can use html

const element = <h1 className="header"> This is JSX</h1>;
/*
$$typeof: Symbol(react.element)
key: null
props: {className: 'header', children: ' This is JSX'}
ref: null
type: "h1"
_owner: null
_store: {validated: false}
*/
console.log(element);

// What React is rendering with JSX is a regular JS object that describes the DOM element that will be created
// JSX is kind of a function that returns an Object that can be used to render HTML contents.

//With JSX i need to be sure to return a single HTML element at once, wrapping other necessary tags inside it

const page = (
  <div>
    <h1 className="header"> Let's try JSX</h1>
    <p> This is a paragraph</p>
  </div>
);

root.render(page);

const navbar = (
  <nav>
    <h1> Reactino Nooberino</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

root.render(navbar);
