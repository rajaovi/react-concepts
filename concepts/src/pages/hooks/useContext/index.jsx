import React, { useState } from "react";
import FunctionComponent from "./functionComponent";
import ClassComponent from "./classComponent";
import BackToHome from "../../../components/backToHome";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = React.createContext()

const UseContext = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(!darkTheme);
    }

  return (
    <>
      <BackToHome />
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContext;
