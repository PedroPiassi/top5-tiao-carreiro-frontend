import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./auth";
import { Template } from "../components/template";
import AccessDenied from "../components/accesDenied";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { RoleProtected } from "./RoleProtected";
import { Pending } from "../pages/pending";
import { Approve } from "../pages/approve";
import { Reject } from "../pages/reject";
import { Home } from "../pages/home";
import { RedirectBasedOnRole } from "./RedirectBasedOnRole";

export const routes = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Template />,
        children: [
          {
            path: "/",
            element: <RedirectBasedOnRole />,
          },
          {
            path: "/home",
            element: <RoleProtected allowedRoles={["user"]} />,
            children: [{ path: "", element: <Home /> }],
          },
          {
            path: "/pendentes",
            element: <RoleProtected allowedRoles={["admin"]} />,
            children: [{ path: "", element: <Pending /> }],
          },
          {
            path: "/aprovadas",
            element: <RoleProtected allowedRoles={["admin"]} />,
            children: [{ path: "", element: <Approve /> }],
          },
          {
            path: "/reprovadas",
            element: <RoleProtected allowedRoles={["admin"]} />,
            children: [{ path: "", element: <Reject /> }],
          },
          {
            path: "*",
            element: <AccessDenied />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "*",
    element: <Navigate to="/access-denied" />,
  },
]);
