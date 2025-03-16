## REACT CONCEPTS IN SIMPLE

- [React.createElement](#reactcreateelement)
- [JSX](#jsx)
- [ReactDOM](#react-dom)
- [Elements](#elements-in-react)
- [Components](#components-in-react)
- [Events]


#### React.createElement
`createElement` lets you create a React element. It serves as an alternative to writing JSX - `const element = createElement(type, props, ...children)`
Example
```
const element = React.createElement('h1', null, 'Hello, world!');
```

## [:top:](#react-concepts-in-simple)

#### JSX
JSX, or JavaScript XML, is a syntax extension for JavaScript that allows to write HTML-like code in javascipt file.
```
// JSX example
const element = <h1>Hello, JSX!</h1>;

// Equivalent JavaScript code
const element = React.createElement('h1', null, 'Hello, JSX!');
```
## [:top:](#react-concepts-in-simple)

#### React DOM
ReactDOM serves as a bridge between React components and the browser's DOM. Provides specific methods to manipulate the DOM, such as render(), createRoot(), and hydrateRoot().

## [:top:](#react-concepts-in-simple)

#### Elements in React
A React element is a plain JavaScript object that describes a DOM node or a component instance `const element = <h1>Hello, world!</h1>;` is equivalent to the following React.createElement().

## [:top:](#react-concepts-in-simple)

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
## [:top:](#react-concepts-in-simple)

#### Events in React
In React, events are actions or occurrences, often triggered by user interactions such as `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onFocus`,

## [:top:](#react-concepts-in-simple)

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
## [:top:](#react-concepts-in-simple)

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

## [:top:](#react-concepts-in-simple)

#### Pure Components:
_Class component_ - Pure component  that implements the `shouldComponentUpdate` lifecycle method with a shallow comparison of props and state.
```
class MyComponent extends React.PureComponent {
    render() {
        return <div>{this.props.message}</div>;
    }
}
```
_Functional Component_ - `React.memo` provides similar functionality.
```
const MyComponent = (props) => {
  /* render using props */
  return <div>{props.value}</div>;
}

// Wrap the component with React.memo
export default React.memo(MyComponent);
```
## [:top:](#react-concepts-in-simple)

#### Synthetic events in React:
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
## [:top:](#react-concepts-in-simple)

