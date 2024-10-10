import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import JobPostingProvider from "./context/JobPostingProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JobPostingProvider>
      <App />
    </JobPostingProvider>
  </StrictMode>
);
