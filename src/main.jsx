import React from "react";
import { createRoot } from "react-dom/client";
import App, { App as NamedApp } from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// tiny guard to catch import mismatches early (prevents React error #130)
console.assert(
  typeof App === "function" && typeof NamedApp === "function",
  "App must be a function component (both default and named exports are provided)."
);
