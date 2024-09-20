import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Footer } from "./components/App-memo";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <Footer />
    </App>
  </React.StrictMode>
);
