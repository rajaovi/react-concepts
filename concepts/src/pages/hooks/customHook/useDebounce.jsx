import React, { useState, useEffect } from "react";

//Custom Hook
const useDebounce = (text, delay) => {
  const [debounce, setDebounced] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(text);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return debounce;
};

const UseDebounce = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h4>Debounce</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Debounce value with 1s delay output: <b>{debouncedText}</b></p>
    </div>
  );
};

export default UseDebounce;
