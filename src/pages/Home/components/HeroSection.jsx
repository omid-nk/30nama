import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import slidesData from "../../../data/heroSlider";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import logo from "/public/logo/favicon.png";

import { motion } from "motion/react";
import { LiaImdb } from "react-icons/lia";
import { SiRottentomatoes, SiMetacritic } from "react-icons/si";

function HeroSection() {
  return (
    <div className="relative h-110 w-full sm:h-130 md:h-150 lg:h-170 xl:h-180">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        slidesPerView={1}
        effect="fade"
        speed={800}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slidesData.map(
          ({
            id,
            title,
            image,
            duration,
            ageRating,
            ratings,
            genres,
            description,
          }) => (
            <SwiperSlide
              key={id}
              className="relative flex items-center justify-center px-2 py-22 md:px-5 xl:rounded-3xl"
              style={{
                backgroundImage: `url(${image || "/fallback.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Content */}
              <div className="bg-dark-3/50 relative z-20 my-auto flex w-fit max-w-4xl flex-col gap-4 rounded-2xl p-4 backdrop-blur-xs sm:p-8">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-light text-xl font-bold sm:text-3xl md:text-4xl"
                >
                  {title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-light flex gap-4 text-sm"
                >
                  <span>{duration}</span>
                  <span>{ageRating}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="my-6 flex flex-wrap gap-2"
                >
                  <span className="bg-dark-2 flex items-center gap-2 rounded-2xl pr-3 text-sm sm:pr-4">
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-8 w-8 scale-110 rounded-full border-2 object-contain p-2 md:h-10 md:w-10"
                    />
                    {ratings.site}
                  </span>

                  <span className="bg-dark-2 flex items-center gap-2 rounded-2xl pr-3 text-sm sm:pr-4">
                    <SiRottentomatoes className="text-primary h-8 w-8 scale-110 rounded-full border-2 p-2 md:h-10 md:w-10" />
                    {ratings.rt}
                  </span>

                  <span className="bg-dark-2 flex items-center gap-2 rounded-2xl pr-3 text-sm sm:pr-4">
                    <LiaImdb className="h-8 w-8 scale-110 rounded-full border-2 p-2 text-amber-300 md:h-10 md:w-10" />
                    {ratings.imdb}
                  </span>

                  <span className="bg-dark-2 flex items-center gap-2 rounded-2xl pr-3 text-sm sm:pr-4">
                    <SiMetacritic className="h-8 w-8 scale-110 rounded-full border-2 p-2 text-blue-900 md:h-10 md:w-10" />
                    {ratings.metacritic}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="bg-dark-2/80 rounded-lg px-2 py-1 text-sm text-white/70 md:px-4"
                    >
                      {genre}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="hidden max-w-md text-sm leading-relaxed text-white/80 md:block md:text-base"
                >
                  {description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-darker hover:bg-primary-darker/80 rounded-2xl px-6 py-2 text-white transition-colors"
                  >
                    Watch Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-2/60 rounded-2xl px-4 py-2 text-white/70 transition-colors hover:text-white"
                  >
                    Details
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="swiper-pagination static! flex items-center justify-center" />
      </div>
    </div>
  );
}

export default HeroSection;
