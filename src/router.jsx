import { createBrowserRouter } from "react-router";

import MainLayout from "./features/layout/MainLayout";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

import { getMostPopularMovies } from "./services/tmdbApi";

import MovieDetails from "./pages/MovieDetails/MovieDetails";
import About from "./pages/About/About";
import Forum from "./pages/Forum/Forum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Home
      { index: true, element: <Home /> },

      // Movies
      {
        path: "movies",
        element: (
          <CategoryPage
            title="Most Popular Movies"
            fetchFunction={getMostPopularMovies}
          />
        ),
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      { path: "/about", element: <About /> },
      { path: "/forum", element: <Forum /> },
      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
