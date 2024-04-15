import React from 'react'
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

