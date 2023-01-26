Quiz!

1. What is a React component?

A React component is a piece of code that can be integrated in a bigger application, it does one specific job.

Teacher response: a React component is a functions that returns some HTML Code.

2. What's wrong with this code?

```js
function myComponent() {
  return <small>I'm tiny text!</small>;
}
```

The component name is not in PascalCase

3. What's wrong with this code?

```js
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

ReactDOM.render(Header(), document.getElementById("root"));
```

ReacrDOM.render accepts a constant as first variable, note a function (?)

Teacher answer: the correct way of calling the component in the function is:

```js
ReactDOM.render(<Header />, document.getElementById("root"));
```
