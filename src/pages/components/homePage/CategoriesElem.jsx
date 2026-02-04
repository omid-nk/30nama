import { motion } from "motion/react";
import categoriesList from "../../../data/categoriesList";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function CategoriesElem() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="my-6 grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6"
    >
      {categoriesList.map((cat) => {
        const Icon = cat.icon;

        return (
          <motion.div
            key={cat.id}
            variants={item}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group bg-dark-100 hover:border-primary flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 p-4 text-white/60 transition-colors duration-300 hover:text-white sm:p-5"
          >
            {Icon && (
              <Icon className="group-hover:text-primary mb-2 h-8 w-8 text-white/50 transition-colors sm:h-10 sm:w-10" />
            )}

            <p className="text-center text-xs font-medium sm:text-sm">
              {cat.title}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default CategoriesElem;
