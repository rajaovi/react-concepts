import React, { useState, useMemo, useEffect } from 'react'
import BackToHome from '../../../components/backToHome';

export default function UseMemo() {

    const [number, setNumber ] = useState(0);
    const [dark, setDark ] = useState(false);

    const numberDouble = useMemo(() => {
        return loopFunc(number);
    },[number])

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark])

    useEffect(() => {
         console.log("Theme Changed");
    },[themeStyle])

  return (
    <>
        <BackToHome />
        <input type='number' value={number} onChange={(e) => setNumber((parseInt(e.target.value)))} />
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        <div style={themeStyle}>{numberDouble}</div>
    </>
  )
}

function loopFunc(num) { 
    console.log("Loop Function");
    for (let i = 0; i < 1000000; i++) { /* empty */ }
    return num * 2;
}
