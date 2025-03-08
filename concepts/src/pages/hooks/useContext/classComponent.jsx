import React, { Component } from "react";
import { ThemeProvider } from "./themeContext";

export class ClassComponent extends Component {
  themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "white" : "black",
      margin: "2em",
      padding: "2em",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyle(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassComponent;
