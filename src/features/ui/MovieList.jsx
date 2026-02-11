import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

import "swiper/css";

function MovieList({ title, fetchFunction, viewAllPath }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await fetchFunction();
        setMovies(data.results.slice(0, 12));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [fetchFunction]);

  return (
    <div className="mt-8 space-y-4 px-4 xl:px-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <Link
          to={viewAllPath}
          className="text-sm text-gray-400 transition hover:text-white"
        >
          View All →
        </Link>
      </div>

      <Swiper spaceBetween={16} slidesPerView={"auto"} grabCursor>
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="!w-[150px] sm:!w-[180px] md:!w-[200px]"
          >
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
