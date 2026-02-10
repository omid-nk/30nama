import { useRef } from "react";
/* eslint-disable-next-line no-unused-vars -- motion.section */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import genresList from "../../../data/genresList";

import "swiper/css";
import "swiper/css/free-mode";

function GenresListElem() {
  const swiperRef = useRef(null);

  return (
    <section className="genres-swiper mb-4 w-full p-2 sm:px-6">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-dark-2 hover:bg-dark-3/60 border-light/10 text-light/80 hover:text-light z-10 mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors"
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
                  className="no-drag bg-dark-3/40 hover:border-primary-darker hover:bg-primary-darker text-light border-light/10 flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors md:px-6"
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
          className="bg-dark-2 hover:bg-dark-3/60 z-10 ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:text-white"
        >
          <HiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default GenresListElem;
