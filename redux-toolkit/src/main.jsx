import React, { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import { createRoot } from "react-dom/client";
import reducer from "./store";
import { Provider } from "react-redux";

// const store = createStore(reducer, composeWithDevTools());
const store = configureStore({ reducer: reducer });

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
