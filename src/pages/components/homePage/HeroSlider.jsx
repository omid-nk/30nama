import { motion } from "motion/react";
import { useRef } from "react";

import slidesData from "../../../data/heroSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { SwiperNavigation } from "./SwiperNavigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import logo from "/public/images/logo-small.png";
import { LiaImdb } from "react-icons/lia";
import { SiRottentomatoes, SiMetacritic } from "react-icons/si";

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="hero-slider-wrapper relative min-h-160 w-full max-w-full rounded-2xl sm:rounded-3xl"
    >
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
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
              className="hero-slider-slide relative flex h-full w-full flex-col rounded-2xl p-4 sm:rounded-3xl sm:p-10 md:p-16"
              style={{
                backgroundImage: `url(${image || "/fallback.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlays */}
              <span className="from-dark-200 pointer-events-none absolute inset-y-0 left-0 z-10 w-full bg-linear-to-r to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex min-h-0 w-full max-w-4xl flex-1 flex-col gap-4">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="cursor-default text-3xl leading-tight font-bold text-white md:text-4xl"
                >
                  {title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex cursor-default gap-4 text-sm text-white/60"
                >
                  <span>{duration}</span>
                  <span>{ageRating}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="my-6 flex cursor-default flex-wrap gap-2"
                >
                  <span className="bg-dark-100 flex items-center gap-2 rounded-2xl py-1 pr-4">
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-10 w-10 rounded-full border-2 object-contain p-2"
                    />
                    {ratings.site}
                  </span>
                  <span className="bg-dark-100 flex items-center gap-2 rounded-2xl py-1 pr-4">
                    <SiRottentomatoes className="h-10 w-10 rounded-full border-2 p-2 text-red-500" />
                    {ratings.rt}
                  </span>
                  <span className="bg-dark-100 flex items-center gap-2 rounded-2xl py-1 pr-4">
                    <LiaImdb className="h-10 w-10 rounded-full border-2 p-2 text-amber-300" />
                    {ratings.imdb}
                  </span>
                  <span className="bg-dark-100 flex items-center gap-2 rounded-2xl py-1 pr-4">
                    <SiMetacritic className="h-10 w-10 rounded-full border-2 p-2 text-blue-900" />
                    {ratings.metacritic}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex cursor-default flex-wrap gap-2"
                >
                  {genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="bg-dark-100 rounded-lg px-4 py-1 text-sm text-white/70"
                    >
                      {genre}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="max-w-md cursor-default text-sm leading-relaxed text-white/80 md:text-base"
                >
                  {description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary/80 cursor-pointer rounded-2xl px-6 py-2 text-white transition-colors"
                  >
                    Watch Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer rounded-2xl bg-black/70 px-4 py-2 text-white/70 transition-colors hover:text-white"
                  >
                    Details
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ),
        )}
        <SwiperNavigation prevRef={prevRef} nextRef={nextRef} />
      </Swiper>
    </motion.div>
  );
}
