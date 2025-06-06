import React, { useState, useMemo, useEffect } from 'react'
import Header from "../../../components/header";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const numberDouble = useMemo(() => {
    return loopFunc(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);

  return (
    <>
      <Header title="useMemo" page="Hooks" toPage="/hooks" />
      <h4>useMemo</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <div style={themeStyle}>{numberDouble}</div>
    </>
  );
}

function loopFunc(num) { 
    console.log("Loop Function");
    for (let i = 0; i < 1000000; i++) { /* empty */ }
    return num * 2;
}
