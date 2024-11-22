import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Root from "./root";
import ErrorPage from "../pages/error/error-page";

export const AppRouter = createBrowserRouter([
  { element: <Root />, children: AppRoutes, errorElement: <ErrorPage /> },
]);
