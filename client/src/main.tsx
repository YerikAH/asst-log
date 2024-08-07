import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
import { RouterProvider } from "react-router-dom";
import createRouter from "@/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={createRouter} />
  </React.StrictMode>
);
