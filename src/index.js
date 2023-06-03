import React from "react";
/* eslint-disable */
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { firebase } from "./fbase";
import { BrowserRouter } from "react-router-dom";
import { authService } from "./fbase";
import "../src/style.css";
// console.log(firebase);
// console.log(authService);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter base="/">
      <App />
    </BrowserRouter>
  </>
);
