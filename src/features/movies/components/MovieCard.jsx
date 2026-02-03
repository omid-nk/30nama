import { useState } from "react";
import { motion } from "motion/react";

function MovieCard({ movie }) {
  const { title, poster_path } = movie;
  const [isHover, setIsHover] = useState();

  return (
    <motion.div
      initial={{ scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative aspect-2/3 cursor-pointer overflow-hidden rounded-lg"
    >
      <img
        src={poster_path}
        alt={title}
        className="h-full w-full rounded-lg object-cover"
      />
      <motion.span
        className="absolute -top-10 -right-32 block w-96 rotate-45 rounded-lg"
        initial={{
          height: "33%",
          backgroundColor: "rgba(255,255,255,0.05)",
          filter: "blur(8px)",
        }}
        animate={{
          height: isHover ? "50%" : "33%",
          backgroundColor: isHover
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.05)",
          filter: isHover ? "blur(12px)" : "blur(2px)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default MovieCard;
