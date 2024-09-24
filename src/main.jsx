import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ActiveProvider from "./context/ActiveProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </StrictMode>
);
