## REACT CONCEPTS IN SIMPLE

#### Pure Components:
_Class component_ - Pure component  that implements the `shouldComponentUpdate` lifecycle method with a shallow comparison of props and state.
```
class MyComponent extends React.PureComponent {
    render() {
        return <div>{this.props.message}</div>;
    }
}
```
_Functional Component_ - React.memo provides similar functionality.
```
const MyComponent = (props) => {
  /* render using props */
  return <div>{props.value}</div>;
}

// Wrap the component with React.memo
export default React.memo(MyComponent);
```

### State in React:
State of a component is an object that holds some information that may change over when component re-renders.

