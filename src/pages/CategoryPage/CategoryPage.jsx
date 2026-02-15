import { useEffect, useState } from "react";
import MovieCard from "../../features/ui/MovieCard";

function CategoryPage({ fetchFunction, title }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNumber) => {
    try {
      const { data } = await fetchFunction(pageNumber);
      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-6 min-h-screen p-6 text-white">
      <h1 className="mb-8 text-2xl font-bold">{title}</h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={`${movie.id}-${Math.random()}`} movie={movie} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="rounded-md bg-red-600 px-6 py-2 transition hover:bg-red-700"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default CategoryPage;
