import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalUserProvider, NavProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalUserProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </GlobalUserProvider>
  </React.StrictMode>
);
