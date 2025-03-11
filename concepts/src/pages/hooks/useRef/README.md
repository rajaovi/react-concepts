# Use Ref
useRef hook in React is a built-in hook that allows you to create a mutable reference to a DOM element or a value that persists for the full lifetime of a component. It is commonly used for accessing and interacting with DOM elements directly, as well as for storing mutable values that do not trigger re-renders when changed.

#### Key Features of useRef
- **Mutable Object:** `useRef` returns a mutable object with a current property. You can modify this property without causing a re-render of the component.
- **Persisting Values:** The value stored in `useRef` persists across re-renders. This makes it useful for keeping track of values that you want to maintain without triggering a re-render when they change.
- **Accessing DOM Elements:** `useRef` is often used to get a reference to a DOM element, allowing you to perform operations like focusing an input, measuring dimensions, or manipulating styles directly.

#### When to Use useRef
- **Accessing DOM Elements:** When you need to interact with a DOM element directly (e.g., focusing an input field, scrolling to an element).

- **Storing Mutable Values:** When you want to keep track of a value that should not cause a re-render when updated (e.g., timers, previous state values).

- **Avoiding Re-renders:** When you want to store a value that should not trigger a re-render when it changes.

#### Example Usage
```
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```

#### Example of Storing Mutable Values
Here’s another example where useRef is used to store a mutable value:

```
import React, { useRef, useEffect } from 'react';

const TimerComponent = () => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timerRef.current); // Cleanup on unmount
    };
  }, []);

  return <div>Check the console for timer ticks!</div>;
};

export default TimerComponent;
```

#### Refer Code
- [index](./index.jsx)