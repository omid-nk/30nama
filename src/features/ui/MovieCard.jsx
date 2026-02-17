import { Link } from "react-router";

function MovieCard({ movie }) {
  const posterBase = import.meta.env.VITE_TMDB_POSTER_URL;

  const posterUrl = movie.poster_path
    ? `${posterBase}${movie.poster_path}`
    : "/fallback.jpg";
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="group relative aspect-2/3 w-full cursor-pointer overflow-hidden rounded-lg">
        <img
          src={posterUrl}
          alt={movie.title || movie.name}
          className="h-full w-full object-cover transition duration-300"
        />

        <div className="absolute inset-0 flex items-end bg-black/60 p-3 opacity-0 transition duration-300 group-hover:opacity-100">
          <h3 className="text-sm font-semibold text-white">
            {movie.title || movie.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
