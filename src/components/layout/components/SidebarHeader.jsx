import logo from "/public/images/logo-small.png";
import { motion, AnimatePresence } from "motion/react";

function SidebarHeader({ sidebar, setSidebar }) {
  const showTitle = sidebar !== "watch" && sidebar !== "setting";

  return (
    <header className="m-2 flex h-fit items-center">
      <div
        onClick={() => setSidebar("menu")}
        className="bg-dark-100 cursor-pointer rounded-3xl p-6"
      >
        <img className="h-full w-10" src={logo} alt="logo 30nama" />
      </div>

      <AnimatePresence>
        {showTitle && (
          <motion.div
            key="sidebar-title"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="p-6 text-3xl text-white/90"
          >
            <h1 className="cursor-default">30nama</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SidebarHeader;
