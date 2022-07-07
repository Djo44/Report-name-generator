import React from "react";
import ReactDOM from "react-dom/client";
import Bulk from "./Bulk";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Bulk />
  </React.StrictMode>
);
