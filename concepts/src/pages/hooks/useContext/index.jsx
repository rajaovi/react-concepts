import React from "react";
import FunctionComponent from "./functionComponent";
import BackToHome from "../../../components/backToHome";
import ThemeProvider from "./themeContext";

const UseContext = () => {
  return (
    <>
      <BackToHome />
      <ThemeProvider>
        <FunctionComponent />
      </ThemeProvider>
    </>
  );
};

export default UseContext;
