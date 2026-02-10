import { useEffect, useState } from "react";
import { getMovies } from "../../../services/movieService";
import MovieList from "../../../features/movies/components/MovieList";

function NewReleases() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = getMovies();
    setMovies(data);
  }, []);

  return (
    <section className="w-full">
      <h3 className="px-2 text-2xl font-bold text-white">New Releases</h3>
      <MovieList movies={movies} />
    </section>
  );
}

export default NewReleases;
