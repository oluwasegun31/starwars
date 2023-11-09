import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalUserProvider, NavProvider, StarWarsProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalUserProvider>
      <StarWarsProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </StarWarsProvider>
    </GlobalUserProvider>
  </React.StrictMode>
);
