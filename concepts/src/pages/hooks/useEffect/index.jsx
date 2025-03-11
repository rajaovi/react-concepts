import React, { useState, useEffect } from 'react';
import Header from '../../../components/header';

export default function UseEffect() {
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
    <>
    <Header title="useEffect" page="Hooks" toPage="/hooks"  />
    <div>
      <p>Timer: {count} seconds</p>
    </div>
    </>
  );
}