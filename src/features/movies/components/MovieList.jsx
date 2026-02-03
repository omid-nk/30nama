import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <>
      <div className="w-full">
        <Swiper
          spaceBetween={12}
          slidesPerView="auto"
          style={{ padding: "20px 10px", width: "100%" }}
        >
          {movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="w-[140px]! sm:w-[160px]! md:w-[180px]! lg:w-[200px]!"
            >
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MovieList;
