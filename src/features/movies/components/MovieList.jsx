import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiMiniChevronRight } from "react-icons/hi2";

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
            <SwiperSlide key={movie.id} className="w-48!">
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
          <SwiperSlide className="ml-2 h-72! w-16!">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="flex h-full! cursor-pointer items-center justify-center"
            >
              <HiMiniChevronRight className="h-12 w-12 rounded-3xl border border-white/20 p-1 text-white/60" />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MovieList;
