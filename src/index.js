import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Company, Dropdown, DropdownMenu } from "./Components";
import {Careers} from "./Components";
// import {ProductsPage} from "./Components";
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
  {
    path: "Products",
    element: <DropdownMenu/>,

  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
