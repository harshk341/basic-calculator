import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { CalculatorProvider } from "./context/CalculatorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>
);
