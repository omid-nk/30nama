import { Link } from "react-router";

function MovieCard({ movie }) {
  const posterBase = import.meta.env.VITE_TMDB_POSTER_URL;

  // fallback برای فیلم هایی که poster_path ندارن
  const posterUrl = movie.poster_path
    ? `${posterBase}${movie.poster_path}`
    : "/fallback.jpg"; // یه عکس محلی بذار یا رنگ خاکستری

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative aspect-[2/3] w-full cursor-pointer overflow-hidden rounded-lg">
        <img
          src={posterUrl}
          alt={movie.title || movie.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
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
