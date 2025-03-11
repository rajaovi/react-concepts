# Use Effect
`useEffect` is a Hook that allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and more. `useEffect` is called after the render is committed to the screen, making it a suitable place to handle operations that need to occur after the component has rendered.

#### How to use it:
- **Import the Hook:** First, you need to import useEffect from React.
- **Define the Effect:** Call useEffect inside your functional component to define the side effect you want to perform.
- **Cleanup (Optional):** You can return a cleanup function from the effect to clean up resources when the component unmounts or before the effect runs again.

```
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <p>Timer: {count} seconds</p>
    </div>
  );
}

export default Timer;
```
#### Explanation
- **Effect Function:** The function passed to useEffect is executed after the component renders. In this example, it sets up a timer that increments the count state every second.
- **Cleanup Function:** The function returned from the effect is a cleanup function that clears the interval when the component unmounts or before the effect runs again. This is important to prevent memory leaks.
- **Dependency Array:** The second argument to useEffect is an array of dependencies. If you pass an empty array ([]), the effect runs only once after the initial render, similar to componentDidMount in class components. If you include variables in the array, the effect will run again whenever those variables change.

#### Refer Code
- [index](./index.jsx)