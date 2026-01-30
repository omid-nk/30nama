import {
  HiMiniIdentification,
  HiMiniHeart,
  HiMiniShieldCheck,
  HiMiniSignal,
  HiEye,
  HiCloudArrowDown,
  HiMiniBanknotes,
} from "react-icons/hi2";

import { motion } from "motion/react";

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

function ProfileNav() {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">PROFILE</h3>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniIdentification />
          Identity
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniShieldCheck />
          Security
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniSignal />
          Connections
        </motion.span>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">LIBRARY</h3>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniHeart />
          Favorite
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiEye />
          Watch List
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiCloudArrowDown />
          Download
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <HiMiniBanknotes />
          Subscribed
        </motion.span>
      </motion.div>
    </>
  );
}

export default ProfileNav;
