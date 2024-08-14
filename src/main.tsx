import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./app.tsx";
import { Toaster } from "sonner";

const rootNode = document.getElementById("root")!;

rootNode &&
  createRoot(rootNode).render(
    <StrictMode>
      <App />
      <Toaster position="top-center" richColors />
    </StrictMode>
  );
