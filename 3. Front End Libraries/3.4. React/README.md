# React: Notes

* **JSX** - a syntax extension of JavaScript, that allows you to write (render) HTML directly within JavaScript.

* JavaScript can be written within JSX if used between curly braces { }.

* JSX is not valid JavaScript, so it has to be compiled into JavaScript. Transpiler **Babel** is one of the tools for such a process.

* With React, we can render JSX directly to the HTML DOM using React's rendering API known as ReactDOM. To render any React element to the DOM, use `ReactDOM.render(componentToRender, targetNode)`
  * This function call places your JSX into React’s own lightweight representation of DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.
  * It should be called after JSX element declarations.
  * Node can be selected using `document.getElementById('node-id')`

* Differences between JSX and HTML
  * `className` vs. `class`
    * in JSX, you can no longer use the word `class` to define HTML classes. This is because `class` is a reserved word in JavaScript. JSX uses `className`.
    * All HTML attributes and event references in JSX must be named with camelCase convention. 
  * Self-closing tags
    * In HTML, almost all tags have both an opening and closing tag.
    * In JSX, any element can be written with a self-closing tag unless there is a child element inside of it.
        * `<div></div>` can be written as `<div />`.
        * Line-break tag: `<br />`

* Components are the core of React. Everything is a component.
  * 2 ways to create a component:
    * 1st way - use a JavaScript function - **STATELESS FUNCTIONAL COMPONENT**
        * **Stateless functional component** can receive data and render it, but does not manage or track changes to that data.
        * To create a component with a function, write a JavaScript function that returns either JSX or `null`.
        * Example: 
            ```
            // After being transpiled, the <div> will have a CSS class of 'customClass'
            const DemoComponent = function() {
                return (
                    <div className='customClass' />
                );
            };
            ```
        * Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.
    * 2nd way - ES6 `class` syntax - created class extends `React.Component` class
        * This class then has many useful React features, such as:
            * Local state
            * Lifecycle hooks
        * Example:
            ```
            class Kitten extends React.Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    return (
                    <h1>Hi</h1>
                    );
                }
            }
            ```
        * `Kitten`'s constructor uses `super()` which calls the constructor of the parent class, in this case `React.Component`. 
        * The constructor is a special method used during the initialization of objects that are created with the `class` keyword. It is best practice to call a component's constructor with `super`, and pass `props` to both. This makes sure the component is initialized properly. 
* Component Composition
    * Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

    * Imagine you are building an App and have created three components, a `Navbar`, `Dashboard`, and `Footer`. To compose these components together, you could create an `App` parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the `render` method you could write:
        ```
        return (
            <App>
            <Navbar />
            <Dashboard />
            <Footer />
            </App>
        )
        ```
        * When React encounters a custom HTML tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag.
    
    * You can render JSX elements, stateless functional components, and ES6 class components within other components.

* Rendering React components
    * None of the React code you write will render to the DOM without making a call to the ReactDOM API.
    * React components are passed to the API a little differently than JSX elements. You need to use the same syntax as if you were rendering a nested component:
        ```
        ReactDOM.render(<ComponentToRender / >, targetNode)
        ```
        * This syntax is used for both ES6 class components and functional components.
    

# React: Tasks

## 1. Create a simple JSX element

`const JSX = <h1>Hello JSX!</h1>`

## 2. Create a complex JSX element

You can also put the complex element inside parentheses `( )`.

```
const JSX = <div>
                <h1>Header Text</h1>
                <p>Paragraph</p>
                <ul>
                    <li>Unordered list element 1</li>
                    <li>Unordered list element 2</li>
                    <li>Unordered list element 3</li>
                </ul>
            </div>
```

## 3. Add coments in JSX

To put comments inside JSX, use the syntax `{/* */}` to wrap around the comment text.

```
const JSX = (
  <div>
    {/*THIS IS A SIMPLE COMMENT*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

## 4. Render HTML elements to the DOM

```
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))
```

## 5. Define an HTML class in JSX

```
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

## 6. Learn about self-closing JSX tags

```
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
```
## 7. Create a stateless functional component

```
const MyComponent = function() {
  return (
    <div>Example text</div>
  )
}
```
## 8. Create a React component

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};
```
## 9. Create a component with composition

```
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
```
## 10. Use React to render nested components

```
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
```

## 11. Compose React components
```
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
```

## 12. Render a class component to the DOM
```
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
```

## 13. Write a react component from scratch
```
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
```
## . 

```

```
## . 

```

```

## . 

```

```