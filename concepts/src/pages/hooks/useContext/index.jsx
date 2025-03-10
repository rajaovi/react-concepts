import React from "react";
import Header from "../../../components/header";
import FunctionComponent from "./functionComponent";
import ThemeProvider from "./themeContext";
import PropDrilling from "./propDrilling";
import AvoidPropDrilling from "./avoidPropDrilling";
import "./index.css";

const UseContext = () => {
  return (
    <>
      <Header title="useContext" page="Hooks" toPage="/hooks" />
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
