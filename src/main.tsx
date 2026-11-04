import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//handling the rootElement
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root Element can not be found!");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
