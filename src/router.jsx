import { createBrowserRouter } from "react-router";

import MainLayout from "./features/layout/MainLayout";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

import {
  getNewestMovies,
  getMostPopularMovies,
  getLatestMovies,
  getLatestSeries,
  getLatestAnimations,
} from "./services/tmdbApi";

import MovieDetails from "./pages/MovieDetails/MovieDetails";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Home
      { index: true, element: <Home /> },

      // Movies
      {
        path: "movies/newest",
        element: (
          <CategoryPage title="Newest Movies" fetchFunction={getNewestMovies} />
        ),
      },
      {
        path: "movies/popular",
        element: (
          <CategoryPage
            title="Most Popular Movies"
            fetchFunction={getMostPopularMovies}
          />
        ),
      },
      {
        path: "movies/latest",
        element: (
          <CategoryPage title="Latest Movies" fetchFunction={getLatestMovies} />
        ),
      },

      // TV
      {
        path: "tv/latest",
        element: (
          <CategoryPage title="Latest Series" fetchFunction={getLatestSeries} />
        ),
      },

      // Animations
      {
        path: "animations",
        element: (
          <CategoryPage
            title="Latest Animations"
            fetchFunction={getLatestAnimations}
          />
        ),
      },

      {
        path: "movie/:id",
        element: <MovieDetails />,
      },

      { path: "/about", element: <About /> },
      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
