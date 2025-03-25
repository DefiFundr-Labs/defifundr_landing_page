import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./routesPath";
import GuestLayout from "../layout/landing-layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <GuestLayout />,
    children: [
      {
        path: RoutePaths.ROOT,
        element: <Home />,
      },
    ],
  },
]);
