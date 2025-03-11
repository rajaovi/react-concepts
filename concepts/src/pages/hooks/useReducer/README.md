# Use Reducer
`useReducer` is a React Hook that is used for managing complex state logic in functional components. It is an alternative to `useState` and is particularly useful when you have state that depends on previous state or when you need to manage multiple sub-values in a single state object.

#### Key Features of useReducer
- **Reducer Function:** useReducer takes a reducer function as its first argument. This function receives the current state and an action, and it returns a new state based on the action type.
- **Initial State:** The second argument to useReducer is the initial state.
- **Dispatch Function:** useReducer returns an array with two elements: the current state and a dispatch function. You can call the dispatch function with an action to update the state.
- **Syntax:** `const [state, dispatch] = useReducer(reducer, initialState)`; 

#### Example
```
import React, { useReducer, useEffect } from "react";
const initialState = {
  time: 0,
  isRunning: false,
};

// Create Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

// Use Reducer Hook
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer = 0;
    if (!state.isRunning) return;
    timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timer);
      timer = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      <p>{state.time}s</p>
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

```

#### Refer Code
- [index](./index.jsx)