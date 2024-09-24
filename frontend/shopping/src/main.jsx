import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/fonts/fonts.css";
import "./assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
