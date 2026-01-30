import { motion } from "motion/react";
import { HiMagnifyingGlass, HiChevronLeft } from "react-icons/hi2";

function Header() {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ borderRadius: "28px" }}
        whileTap={{ scale: 0.96 }}
        className="bg-dark-100/60 hover:border-primary mr-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-3xl border transition-colors"
      >
        <HiChevronLeft className="h-7 w-7 text-white/80" />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ borderRadius: "28px" }}
        whileTap={{ scale: 0.96 }}
        className="bg-dark-100/60 hover:border-primary flex h-14 w-14 cursor-pointer items-center justify-center rounded-3xl border transition-colors"
      >
        <HiMagnifyingGlass className="h-7 w-7 text-white/80" />
      </motion.span>
    </>
  );
}

export default Header;
