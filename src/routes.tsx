import type { RouteObject } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";
import PreviewPage from "./pages/PreviewPage";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT


const testRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <PortfolioPage/>,
      }
    ],
  },
  {
    path: "/test",
    element: <PreviewPage/>
  },
  { path: "*", element: <NotFoundPage /> },
]

const placeholderRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PreviewPage/>
  },
  {
    path: "/test",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <PortfolioPage/>,
      }
    ],
  },
  { path: "*", element: <NotFoundPage /> },

]

export const routes: RouteObject[] = ENVIRONMENT === "development" ? testRoutes : placeholderRoutes