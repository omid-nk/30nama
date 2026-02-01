import { useRef } from "react";
/* eslint-disable-next-line no-unused-vars -- motion.section */
import { motion } from "motion/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import genresList from "../../../data/genresList";

import "swiper/css";
import "swiper/css/free-mode";

function GenresListElem() {
  const swiperRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="genres-swiper w-full py-2 sm:px-6"
    >
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="اسکرول به چپ"
          className="bg-dark-100 hover:bg-dark-100/80 z-10 mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:text-white"
        >
          <HiChevronLeft className="h-6 w-6" />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={12}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.5,
          }}
          speed={300}
          className="min-w-0 flex-1"
        >
          {genresList.map((item) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={item.id} className="w-auto!">
                <a
                  href="#"
                  draggable={false}
                  className="no-drag bg-dark-100/90 hover:border-primary/50 hover:bg-primary/15 flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium whitespace-nowrap text-white/90 transition-colors hover:text-white"
                >
                  {Icon && <Icon className="h-5 w-5 shrink-0" />}
                  {item.title}
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="اسکرول به راست"
          className="bg-dark-100 hover:bg-dark-100/80 z-10 ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:text-white"
        >
          <HiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </motion.section>
  );
}

export default GenresListElem;
