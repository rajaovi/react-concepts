import React, { useReducer, useEffect } from "react";
import BackToHome from "../../../components/backToHome";
import Title from "../../../components/title";

const initialState = {
  time: 0,
  isRunning: false,
};

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

const UseReducer = () => {
  // eslint-disable-next-line no-undef
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
      <BackToHome />
      <Title title="UseReducer" />
      <p>{state.time}s</p>
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducer;
