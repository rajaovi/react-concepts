import React, { useContext } from "react";
import { ThemeContext } from ".";

const FunctionComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "white" : "black",
    margin: "2em",
    padding: "2em",
  };
  return <div style={themeStyle}>Functional Theme</div>;
};

export default FunctionComponent;
