import type { RouteObject } from "react-router";
import RootLayout from "./layouts/RootLayout";
import PlaygroundPage from "./pages/PlaygroundPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";
import ZoopPage from "./pages/ZoopPage";

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
      {
        path: "playground",
        errorElement: <ErrorPage />,
        element: <PlaygroundPage/>
      },
      {
        path: "zoop",
        errorElement: <ErrorPage />,
        element: <ZoopPage/>
      }
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]
