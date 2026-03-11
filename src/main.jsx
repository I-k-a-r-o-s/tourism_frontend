import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import TourismContextProvider from "./context/TourismContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TourismContextProvider>
        <App />
      </TourismContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
