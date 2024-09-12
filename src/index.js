// Index.js is the structure of the whole website

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="w-full bg-backgroundBlue">
    <App />
  </div>
);
