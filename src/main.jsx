import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "https://deckofcardsapi.com/api/deck";

// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
