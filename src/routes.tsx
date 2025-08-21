import type { RouteObject } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";
import PreviewPage from "./pages/PreviewPage";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT
const homePath = ENVIRONMENT === "development" ? "/" : "/test"
const testPath = ENVIRONMENT === "development" ? "/test" : "/"

export const routes: RouteObject[] = [
  {
    path: homePath,
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
    path: testPath,
    element: <PreviewPage/>
  },
  { path: "*", element: <NotFoundPage /> },
]
