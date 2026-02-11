import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../../services/tmdbApi";
import {
  HiOutlineHeart,
  HiOutlineBookmark,
  HiOutlineShare,
} from "react-icons/hi";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const backdropBase = import.meta.env.VITE_TMDB_BACKDROP_URL;
  const posterBase = import.meta.env.VITE_TMDB_POSTER_URL;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  if (!movie)
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Movie not found
      </div>
    );

  const backdropUrl = movie.backdrop_path
    ? `${backdropBase}${movie.backdrop_path}`
    : null;
  const posterUrl = movie.poster_path
    ? `${posterBase}${movie.poster_path}`
    : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Backdrop */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 -mt-40 flex flex-col gap-10 px-6 pb-16 md:flex-row md:px-16">
        {/* Poster */}
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-60 rounded-lg shadow-2xl"
          />
        ) : (
          <div className="h-[360px] w-60 rounded-lg bg-gray-800" />
        )}

        {/* Info */}
        <div className="max-w-3xl flex-1 space-y-5">
          <h1 className="text-4xl font-bold md:text-5xl">{movie.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="leading-relaxed text-gray-300">
            {movie.overview || "No description available."}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 font-medium transition hover:bg-red-700">
              Watch Now
            </button>
            <button className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 font-medium transition hover:bg-gray-700">
              <HiOutlineBookmark /> Watchlist
            </button>
            <button className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 font-medium transition hover:bg-gray-700">
              <HiOutlineHeart /> Like
            </button>
            <button className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 font-medium transition hover:bg-gray-700">
              <HiOutlineShare /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
