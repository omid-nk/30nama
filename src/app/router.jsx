import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import MovieDetails from "../pages/MovieDetails";
import SeriesDetails from "../pages/SeriesDetails";
import Watch from "../pages/Watch";

import AuthGuard from "../components/guards/AuthGuard";
import PremiumGuard from "../components/guards/PremiumGuard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/profile",
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
      },
      { path: "/search", element: <Search /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/series", element: <Series /> },
      { path: "/series/:id", element: <SeriesDetails /> },
      {
        path: "/watch/:type/:id",
        element: (
          <AuthGuard>
            <PremiumGuard>
              <Watch />
            </PremiumGuard>
          </AuthGuard>
        ),
      },
    ],
  },
]);
