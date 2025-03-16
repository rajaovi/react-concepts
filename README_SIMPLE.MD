## REACT CONCEPTS IN SIMPLE

### Table of Concepts
- [React.createElement](#reactcreateelement)
- [JSX](#jsx)
- [Virtual DOM](#virtual-dom)
- [ReactDOM](#react-dom)
- [React DOM Server](#react-dom-server)
- [Elements](#elements-in-react)
- [Components](#components-in-react)
- [Events](#events-in-react)
- [Synthetic Events](#synthetic-events)
- [Component lifecycle](#lifecycle-method)
- [Pure Components](#pure-components)
- [State](#state-in-react)
- [Props](#props-in-react)
- [Stateless Components](#stateless-component)
- [Statefull Components](#statefull-component)
- [PropTypes](#proptypes)
- [React Inline Style](#react-inline-style)
- [Fragments](#fragments)
- [Hooks](#hooks)
- [React Portal](#react-portal)
- [Lifting State Up](#lifting-state-up)
- [Lazy Loading](#lazy-loading)
- [React Router](#react-router)
- [Redux](#react-redux)

#### React.createElement
`createElement` lets you create a React element. It serves as an alternative to writing JSX - `const element = createElement(type, props, ...children)`
Example
```̉
const element = React.createElement('h1', null, 'Hello, world!');
```

## [:top:](#table-of-concepts)

#### JSX
JSX, or JavaScript XML, is a syntax extension for JavaScript that allows to write HTML-like code in javascipt file.
```
// JSX example
const element = <h1>Hello, JSX!</h1>;

// Equivalent JavaScript code
const element = React.createElement('h1', null, 'Hello, JSX!');
```
## [:top:](#table-of-concepts)

#### Virtual DOM
The virtual DOM (VDOM) is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM.

#### React DOM
ReactDOM serves as a bridge between React components and the browser's DOM. Provides specific methods to manipulate the DOM, such as render(), createRoot(), and hydrateRoot().

## [:top:](#table-of-concepts)

#### React DOM Server
It's a part of the React library that provides methods to render React components to static markup, typically used in server-side rendering (SSR).

`ReactDOMServer` is primarily used in Node.js environments and offers two main methods
- `renderToString()`: Renders a React component to a string.
- `renderToStaticMarkup()`: Renders a React component to a string, without any additional attributes
```
import ReactDOMServer from 'react-dom/server';

function MyComponent() {
  return <div>Hello, Server-Side Rendering!</div>;
}

const htmlString = ReactDOMServer.renderToString(<MyComponent />);
console.log(htmlString);
// Output: <div data-reactroot="">Hello, Server-Side Rendering!</div>

const staticMarkupString = ReactDOMServer.renderToStaticMarkup(<MyComponent />);
console.log(staticMarkupString);
// Output: <div>Hello, Server-Side Rendering!</div>
```

## [:top:](#table-of-concepts)

#### Elements in React
A React element is a plain JavaScript object that describes a DOM node or a component instance `const element = <h1>Hello, world!</h1>;` is equivalent to the following React.createElement().

## [:top:](#table-of-concepts)

#### Components in React
A component in React is a reusable and self-contained building block

_Functional component_
```
function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
_Class component_
```
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
## [:top:](#table-of-concepts)

#### Events in React
In React, events are actions or occurrences, often triggered by user interactions such as `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onFocus`,

## [:top:](#table-of-concepts)

#### Synthetic Events:
React's synthetic events are cross-browser wrappers around the browser's native events. They normalize events, ensuring they have consistent properties across different browsers.
```
function MyComponent() {
  const handleClick = (event) => {
    event.persist(); // Retain the event for asynchronous access
    setTimeout(() => {
      console.log(event.target); // Access event properties asynchronously
    }, 1000);
  };

  return <button onClick={handleClick}>Click me</button>;
}
```
## [:top:](#table-of-concepts)

#### Lifecycle Method
The component lifecycle in React refers to the series of events that occur from the creation of a component to its removal from the DOM. 

It's divided into three main phases 
- **Mounting**
  - This phase involves the initial rendering of the component to the DOM. Methods invoked during this phase:
  - `constructor()`: Initializes the component's state and binds event handlers.
  - `render()`: Required method that returns the JSX to be rendered.
  - componentDidMount(): Invoked immediately after the component is mounted, suitable for fetching data or interacting with the DOM.
  - `render()`
- **Updating**
  - This phase is triggered by changes to the component's props or state. Methods invoked during this phase:
  - `render()`: Re-renders the component with updated data.
  - `componentDidUpdate()`: Invoked after the component is re-rendered, allowing for DOM manipulation or further updates based on the changes.
- **Unmounting**
  - This phase occurs when the component is removed from the DOM. Method invoked during this phase: 
  - `componentWillUnmount()`: Invoked just before the component is unmounted, used for cleanup tasks such as clearing timers or canceling network requests.

## [:top:](#table-of-concepts)

#### Pure Components:
If the previous value of state or props and the new value of the state or props are the same, the component will not re-render.

_Functional Component_ 
- `React.memo` provides similar functionality.
```
const MyComponent = (props) => {
  /* render using props */
  return <div>{props.value}</div>;
}

// Wrap the component with React.memo
export default React.memo(MyComponent);
```
_Class component_ 
- Pure component  that implements the `shouldComponentUpdate` lifecycle method with a shallow comparison of props and state.
```
class MyComponent extends React.PureComponent {
    render() {
        return <div>{this.props.message}</div>;
    }
}
```
## [:top:](#table-of-concepts)

#### State in React:
State of a component is an object that holds some information that may change over when component re-renders.
_Functional Component_ `const [message, setMessage] = useState(initalState);`

_Class component_
```
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "State in React",
    };
  }
}
```
## [:top:](#table-of-concepts)

#### Props in React:
Props is a mechanism for passing data from parent to child component. Props are immutable(read-only). 

_Functional component_ 
```
// Parent component
function ParentComponent() {
  const message = "Hello from parent!";
  return <ChildComponent text={message} />;
}

// Child component
function ChildComponent(props) {
  return <p>{props.text}</p>;
}
```
_Class component_ 
```
//Parent component
<ChildComponent name="Tony" age="30" />

//Child Component
<div>
  <p>{this.props.name}</p>
  <p>{this.props.age}</p>
</div>
```
## [:top:](#table-of-concepts)

#### Stateless Component
Stateless components, also known as functional components, are simpler and primarily focused on presenting data. They receive data through props and render UI elements based on that data, without managing any internal state.
```
export const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

```
## [:top:](#table-of-concepts)

#### Statefull Component
Stateful components, also known as class components (although they can also be functional components using hooks), manage their own internal data, which can change over time

```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
## [:top:](#table-of-concepts)

#### PropTypes
Proptype used for type checking the props passed to a component. It helps ensure that components receive data of the correct type.

_list of commonly used PropTypes:_
- `array`: An array
- `bool`: A boolean value
- `func`: A function
- `number`: A number
- `object`: An object
- `string`: A string
- `symbol`: A symbol
- `node`: The DOM node or a React element
- `element`: A React element
- `instanceOf`: Custom type
- `oneOf`: One of the provided values
- `oneOfType`: One of the provided types
- `shape`: An object with the specified shape
- `arrayOf`: An array of a specified type
- `objectOf`: An object with a specified type

_Functional component_
```
function MyComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```
_Class Component_
```
class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

  render() {
    return (
      <>
        <h1>{`Welcome, ${this.props.name}`}</h1>
        <h2>{`Age, ${this.props.age}`}</h2>
      </>
    );
  }
}
```
## [:top:](#table-of-concepts)

#### React inline Style
Inline styles provide a way to style React elements directly within the JSX code using the style attribute.
```
const myStyle = {
  color: 'blue',
  fontSize: '16px',
  backgroundColor: 'lightgray'
};

function MyComponent() {
  return (
    <div style={myStyle}>
      This text is styled inline.
    </div>
    <div style={{ color: 'green', padding: 20 }}> 
      Example of Inline Style
    </div>
  );
}
```
## [:top:](#table-of-concepts)

#### Fragments
Fragments are a way to group a list of children without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component but don't want to add a wrapper element.
_There are two ways to use Fragments:_
- Shorthand syntax: `<></>`
- Explicit syntax: `<React.Fragment></React.Fragment>`
```
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </>
  );
}
```
## [:top:](#table-of-concepts)

#### Hooks
Hooks are functions that let you "hook into" React state and lifecycle features from functional components

[Click ere to earn More about Hooks](concepts/src/pages/hooks/README.md)

## [:top:](#table-of-concepts)

#### React Portal
`createPortal` is a function that allows to render React children into a different part of the DOM tree, outside of the parent component's hierarchy

[Click ere to earn More about Check here to more about Portal](concepts/src/pages/portals/)

## [:top:](#table-of-concepts)

#### Lifting State Up 
When two are more components shares same state, then we can lift state up to a adjacent parent component. This is process is called lifting state up.

[Click ere to earn More about Lifting State Up](concepts/src/pages/liftingState/)

## [:top:](#table-of-concepts)

#### Lazy Loading 
Lazy Suspense is a technique for improving application performance by deferring the loading of components until they are needed.

[Click ere to earn More about Lazy Loading](concepts/src/pages/lazySuspense/)

## [:top:](#table-of-concepts)

#### React Router
React Router is a library that enables navigation between different views or components in a React application. It allows  to create single-page applications with multiple routes.

_Basic components provided by React Router include:_
- `<BrowserRouter>`: It utilizes the HTML5 history API for navigation.
- <Routes>: It acts as a container for <Route> components, rendering the first child that matches the current URL.
- `<Route>`: It defines a specific path and the component to render when the path matches the URL.
- `<Link>`: It enables navigation to different routes by updating the URL.
`useNavigate`: A hook that provides a function to programmatically navigate to different routes.

[Click ere to earn More about React Router](concepts/src/routes.jsx)

## [:top:](#table-of-concepts)

#### React Redux
React Redux is a tool that helps manage and share data (state) across different parts of a React application. It acts like a central storage, making it easier to handle complex data flows, especially in larger apps.

[Click ere to earn More about Redux](concepts/src/pages/redux)

## [:top:](#table-of-concepts)
