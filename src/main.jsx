import React from "react";
// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import axios from "axios";
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

axios.defaults.baseURL = "https://deckofcardsapi.com/api/deck";

// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode> // prevents state x2
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>
);
