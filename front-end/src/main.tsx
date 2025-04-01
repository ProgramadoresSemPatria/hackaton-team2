import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes.tsx";
import "./index.css";
import AuthContextProvider from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  </StrictMode>
);
