import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export function SwiperNavigation({ prevRef, nextRef }) {
  return (
    <>
      <button
        ref={prevRef}
        className="custom-prev absolute z-50 rounded md:top-6 md:right-18"
      >
        <HiChevronLeft className="bg-dark-100/25 hover:bg-dark-100/40 h-10 w-10 cursor-pointer rounded-xl p-1 text-white/60 transition-all hover:text-white/80" />
      </button>
      <button
        ref={nextRef}
        className="custom-next absolute z-50 rounded md:top-6 md:right-6"
      >
        <HiChevronRight className="bg-dark-100/25 hover:bg-dark-100/40 h-10 w-10 cursor-pointer rounded-xl p-1 text-white/60 transition-all hover:text-white/80" />
      </button>
    </>
  );
}
