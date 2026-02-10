import { useEffect, useState } from "react";
import { getMovies } from "../../../services/movieService";
import MovieList from "../../../features/movies/components/MovieList";

function Series() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = getMovies();
    setMovies(data);
  }, []);

  return (
    <section className="mt-4 w-full">
      <h3 className="px-2 text-2xl font-bold text-white">Series</h3>
      <MovieList movies={movies} />
    </section>
  );
}

export default Series;
