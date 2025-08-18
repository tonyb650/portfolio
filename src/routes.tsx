import type { RouteObject } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <PortfolioPage/>
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]
