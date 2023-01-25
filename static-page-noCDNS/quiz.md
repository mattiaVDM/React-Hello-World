1. Why we need to import React in our files?

Because otherwise we wouldn't have access to the ReactDOM.render function

2. If we console.log(page) in index.js, what show up?

A Javascript Object with directives to how to render the element in the page

3. is this correct?

```js
const page = (
    <h1> Hello </h1>
    <p> World!</p>
)
```

No, because it needs to be wrapped inside a div

4. What does it mean for something to be "declarative" instead of "imperative"?

Declarative means i can tell the program what to accomplish and it would do it based on my directives, in an imperative
kind of programming i need to tell my program how to do things step by step. Running code declaratively is a much
better experience and it leads to less bugs.

5. What does it mean for something to be composable?

It means that it is made out of different components that can be used together to build bigger components.
