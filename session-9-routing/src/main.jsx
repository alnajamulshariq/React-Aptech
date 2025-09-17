import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      
      <App />
    </BrowserRouter>
  </StrictMode>
);
