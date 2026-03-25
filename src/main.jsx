import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.jsx";
import InstallAppProvider from "./contexts/InstallAppProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallAppProvider>
      <RouterProvider router={router} />
      <Toaster />
    </InstallAppProvider>
  </StrictMode>,
);
