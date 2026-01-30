import { motion } from "motion/react";
import {
  HiMiniHome,
  HiMiniTv,
  HiMiniMagnifyingGlass,
  HiMiniFunnel,
} from "react-icons/hi2";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

function MenuNav() {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">MENU</h3>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniHome />
          30nama
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniTv />
          Watch Now
        </motion.span>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">SEARCH</h3>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniMagnifyingGlass />
          Precise Search
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniFunnel />
          Advanced Search
        </motion.span>
      </motion.div>
    </>
  );
}

export default MenuNav;
