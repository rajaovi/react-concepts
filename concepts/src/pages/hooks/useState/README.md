# Use State
`useState` is a Hook that allows you to add state management to functional components. Before the introduction of Hooks in React 16.8, state could only be managed in class components. `useState` provides a way to declare state variables in functional components, making it easier to manage and update state without needing to convert a functional component into a class component.

#### How to use it:
- **Import the Hook:** First, you need to import useState from React.
- **Declare State:** Call useState inside your functional component to declare a state variable and a function to update it.
- **Update State:** Use the updater function to change the state.

```
import React, { useState } from "react";

export default function UseState() {
const [count, setCount] = useState(0);

return (
<div>
    <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
    );
}
```
#### Explanation
- **useState(0):** This initializes the state variable count to 0. The useState function returns an array with two elements: the current state value and a function to update that state.
- **setCount:** This is the function used to update the state. When you call setCount, React will re-render the component with the new state value.
- **Event Handling:** In the button's onClick handler, we call setCount(count + 1) to increment the count each time the button is clicked.

#### Refer Code
- [index](./index.jsx)