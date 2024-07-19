import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./app.tsx";
import { Toaster } from "sonner";

const rootNode = document.getElementById("root")!;

rootNode &&
  createRoot(rootNode).render(
    <StrictMode>
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </Suspense>
    </StrictMode>
  );
