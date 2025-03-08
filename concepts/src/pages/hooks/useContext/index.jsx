import React from "react";
import FunctionComponent from "./functionComponent";
import BackToHome from "../../../components/backToHome";
import ThemeProvider from "./themeContext";
import PropDrilling from "./propDrilling";
import AvoidPropDrilling from "./avoidPropDrilling";
import "./index.css";

const UseContext = () => {
  return (
    <>
      <BackToHome />
      <ThemeProvider>
        <FunctionComponent />
        <>
          <h3>React Prop Drilling Example:</h3>
          <div className="flexContainer">
            <PropDrilling />
            <AvoidPropDrilling />
          </div>
        </>
      </ThemeProvider>
    </>
  );
};

export default UseContext;
