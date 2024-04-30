import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Company } from "./Components";
import {Careers} from "./Components";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Company",
    element: <Company/>,
  },
  {
    path: "Careers",
    element: <Careers/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
