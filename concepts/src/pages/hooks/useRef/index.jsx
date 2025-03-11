import React, { useRef, useEffect, useState } from "react";
import Header from "../../../components/header";

export default function UseRef() {
  const [toggleComp, setToggleComp] = useState(true);
  return (
    <>
      <Header title="useRef" page="Hooks" toPage="/hooks" />
      <button onClick={() => setToggleComp(!toggleComp)}>
        Toggle Component
      </button>
      {toggleComp ? <UseRefComponent /> : <UseRefMutableValues />}
    </>
  );
}

function UseRefComponent() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    // Focus the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
        <h4>how to use useRef to access a DOM element:</h4>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

function UseRefMutableValues() {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => {
      clearInterval(timerRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <>
        <h4>Example of Storing Mutable Values</h4>
      <div>Check the console for timer ticks!</div>
    </>
  );
}
