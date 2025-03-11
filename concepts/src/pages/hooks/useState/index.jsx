import React, { useState } from "react";
import Header from "../../../components/header";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="useState" page="Hooks" toPage="/hooks" />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default UseState;
