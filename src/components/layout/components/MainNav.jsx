import { motion } from "motion/react";
import {
  HiSquares2X2,
  HiRectangleStack,
  HiPlay,
  HiUser,
  HiCog6Tooth,
} from "react-icons/hi2";

const iconVariants = {
  inactive: { scale: 1, opacity: 0.6 },
  active: { scale: 1.2, opacity: 1 },
};

function NavIcon({ active, onClick, children }) {
  return (
    <motion.div
      variants={iconVariants}
      animate={active ? "active" : "inactive"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="m-6 cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

function MainNav({ sidebar, setSidebar }) {
  return (
    <section>
      <motion.div
        layout
        className="flex flex-col items-center gap-8 rounded-3xl p-4"
      >
        <div className="text-white">
          <NavIcon
            active={sidebar === "menu"}
            onClick={() => setSidebar("menu")}
          >
            <HiSquares2X2 className="h-6 w-6" />
          </NavIcon>

          <NavIcon
            active={sidebar === "discover"}
            onClick={() => setSidebar("discover")}
          >
            <HiRectangleStack className="h-6 w-6" />
          </NavIcon>

          <NavIcon
            active={sidebar === "watch"}
            onClick={() => setSidebar("watch")}
          >
            <HiPlay className="h-6 w-6" />
          </NavIcon>
        </div>

        <div className="text-white">
          <NavIcon
            active={sidebar === "profile"}
            onClick={() => setSidebar("profile")}
          >
            <HiUser className="h-6 w-6" />
          </NavIcon>

          <NavIcon
            active={sidebar === "setting"}
            onClick={() => setSidebar("setting")}
          >
            <HiCog6Tooth className="h-6 w-6" />
          </NavIcon>
        </div>
      </motion.div>
    </section>
  );
}

export default MainNav;
