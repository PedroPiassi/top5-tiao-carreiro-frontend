import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./auth";
import { Template } from "../components/template";
import { Home } from "../pages/home";
import AccessDenied from "../components/accesDenied";
import { Login } from "../pages/login";

// Definição das rotas
export const routes = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Template />,
        children: [
          { path: "/", element: <Home /> },
          {
            path: "*",
            element: <AccessDenied />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "*",
    element: <Navigate to="/access-denied" />,
  },
]);
