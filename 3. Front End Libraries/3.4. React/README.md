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

  * Overview:
    * A **stateless functional component** is any function you write which accepts props and returns JSX. 
    * A **stateless component**, on the other hand, is a class that extends `React.Component`, but does not use internal state.
    * A **stateful component** is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

  * Common pattern:
    * Try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.


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
    
* **Props** (a.k.a properties)
  * In React, you can pass props, or properties, to child components. Say you have an `App` component which renders a child component called `Welcome` which is a stateless functional component. You can pass `Welcome` a `user` property by writing:
    ```
    <App>
      <Welcome user='Mark' />
    </App>
    ```
  * You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property `user` is passed to the component `Welcome`. **Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets**: 
    ```
    const Welcome = (props) => <h1>Hello, {props.user}!</h1>
    ```
  * When rendering an array in the child component, `join(", ")` method can be used to create a string out of elements of the array: 
    ```
    const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

    <ParentComponent>
      <ChildComponent colors={["green", "blue", "red"]} />
    </ParentComponent>
    ```
  * Default props
    *  You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided.
      ```
      MyComponent.defaultProps = { location: 'San Francisco' }
      ```
    * React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.
  
  * PropTypes
    * You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.
    * It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps.
    * Example: 
      ```
      MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
      ```
    * The `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is a required property for that component. You will see a warning if that prop isn't provided. Also notice that `func` represents `function`. **Among the seven JavaScript primitive types, function and `boolean` (written as `bool`) are the only two that use unusual spelling.** In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the [documentation](https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type) for all of the options.
    * `PropTypes` is imported independently from React (as of v15.5.0):
      ```
      import PropTypes from 'prop-types';
      ```

  * Accessing props in ES6 class components
    * Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write {this.props.data} in JSX.

* **State**
  * One of the most important topics in React
  * State consists of any data your application needs to know about, that can change over time. Your appls should be able to respond to state changes and present an updated UI when necessary. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.
  * You create state in a React component by declaring a `state` property on the component class in its `constructor`. This initializes the component with `state` when it is created.
  * The component must be created by extending `React.Component` in order for state to work
  * The `state` property must be set to a JavaScript object:
    ```
    this.state = {
      // describe your state here
    }
    ```
  * You can:
    * update it
    * render it in UI
    * pass as props to child components
  * Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in `state` in its `render()` method. You can access the data with `this.state`.
  * Note that if you make a component stateful, **no other components are aware of its state**. Its state is completely **encapsulated**, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.
  * There is another way to access state in a component:
    * In the render() method, before the return statement, you can write JavaScript directly. You could:
      * declare functions
      * access data from state or props
      * perform computations on this data, and so on. 
    * Then, you can assign any data to variables, which you have access to in the return statement.



# React: Tasks

## 1. Create a simple JSX element

```
const JSX = <h1>Hello JSX!</h1>
```

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

## 14. Pass props to a stateless functional component
```
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
```

## 15. Pass an array as props
```
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout"]} />
      </div>
    );
  }
};
```

## 16. Use default props
```
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {
  items: 0
}
```

## 17. Override default props
```
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};
```

## 18. Use PropTypes to define the props you expect
```
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
}

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

## 19. Access props using this.props
```
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword='abcdefgh' />
        </div>
    );
  }
};
```

## 20. Review using props with stateless functional components
```
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

const Camper = props => {
  return <p>{props.name}</p>
};

// const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```

## 21. Create a stateful component
```
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
      this.state = {
        name: "John"
      }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## 22. Render state in the user interface
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

## 23. Render state in the user interface another way
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```