import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
