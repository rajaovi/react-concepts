import React, { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

import { createRoot } from "react-dom/client";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducers";
import { Provider } from "react-redux";

// const store = createStore(reducer, composeWithDevTools());
const store = createStore(reducer, undefined);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);