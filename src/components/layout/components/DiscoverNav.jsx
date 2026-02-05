import { Link } from "react-router";
import { HiInbox, HiMiniArchiveBox } from "react-icons/hi2";
import {
  RiEarthFill,
  RiInstagramFill,
  RiTwitterFill,
  RiDiscordFill,
} from "react-icons/ri";
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

function DiscoverNav() {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">DISCOVER</h3>

        <Link to={"/categories"}>
          <motion.span
            variants={item}
            whileHover={{ x: 6 }}
            className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
          >
            <HiInbox />
            Categories
          </motion.span>
        </Link>

        <Link to={"/genres"}>
          <motion.span
            variants={item}
            whileHover={{ x: 6 }}
            className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
          >
            <HiMiniArchiveBox />
            Genres
          </motion.span>
        </Link>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 flex flex-col gap-1"
      >
        <h3 className="mb-2 cursor-default text-sm text-white/20">
          SOCIAL MEDIA
        </h3>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <RiEarthFill />
          Website
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <RiInstagramFill />
          Instagram
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <RiTwitterFill />
          Twitter
        </motion.span>

        <motion.span
          variants={item}
          whileHover={{ x: 6 }}
          className="text-md flex cursor-pointer items-center gap-2 text-white/60 hover:text-white"
        >
          <RiDiscordFill />
          Discord
        </motion.span>
      </motion.div>
    </>
  );
}

export default DiscoverNav;
