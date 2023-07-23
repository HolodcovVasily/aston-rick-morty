import { lazy } from "react";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { DetailsPage } from "./../pages/DetailsPage/DetailsPage";
import { AuthRoute } from "./../components/AuthRoute/AuthRoute";
import { HomePage } from "./../pages/HomePage/HomePage";
import FavoritesPage from "./../pages/FavoritesPage/FavoritesPage";

const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/character/:id",
    element: (
      <AuthRoute>
        <DetailsPage />
      </AuthRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <AuthRoute>
        <SearchPage />
      </AuthRoute>
    ),
  },
  {
    path: "/history",
    element: (
      <AuthRoute>
        <HistoryPage />
      </AuthRoute>
    ),
  },
  {
    path: "/favorites",
    element: (
      <AuthRoute>
        <FavoritesPage />
      </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
