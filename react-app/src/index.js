import './index.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home /> ),
  },

  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/login",
    element:(<Login />),
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);