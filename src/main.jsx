import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FirstContextProvider from "./context/FirstContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstContextProvider>
      <App />
    </FirstContextProvider>
  </React.StrictMode>
);
