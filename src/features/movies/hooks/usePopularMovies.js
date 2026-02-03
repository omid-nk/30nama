import { useEffect, useState } from "react";
import { getPopularMovies } from "../api";

export default function usePopularMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading };
}
