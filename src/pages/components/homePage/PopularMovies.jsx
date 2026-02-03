import { useEffect, useState } from "react";
import { getMovies } from "../../../services/movieService";
import MovieList from "../../../features/movies/components/MovieList";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = getMovies();
    setMovies(data);
  }, []);

  return (
    <section className="my-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="px-2 text-2xl font-bold text-white">Popular Movies</h3>
        <p className="cursor-pointer px-2 text-sm text-white/60 transition-colors hover:text-white/80">
          Watch More ...
        </p>
      </div>
      <MovieList movies={movies} />
    </section>
  );
}

export default PopularMovies;
