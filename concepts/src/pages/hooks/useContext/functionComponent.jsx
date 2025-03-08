import React from "react";
import { useTheme, useThemeUpdate } from "./themeContext";

const FunctionComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "white" : "black",
    margin: "2em",
    padding: "2em",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toogle Theme</button>
      <div style={themeStyle}>Functional Theme</div>
    </>
  );
};

export default FunctionComponent;
