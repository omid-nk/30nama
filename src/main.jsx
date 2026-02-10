import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./styles/global.css";
import { RouterProvider } from "react-router";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
