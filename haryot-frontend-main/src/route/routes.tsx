import { RouteObject } from "react-router-dom";
import { AppRouteName } from "./route.name";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

export const AppRoutes: RouteObject[] = [
  {
    path: AppRouteName.login.path,
    element: <Login />,
  },
  {
    path: AppRouteName.register.path,
    element: <Register />,
  },
];
