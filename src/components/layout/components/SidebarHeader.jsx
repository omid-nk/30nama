import { motion, AnimatePresence } from "motion/react";
import logo from "/public/images/logo/logo-small.png";

function SidebarHeader({ sidebar, setSidebar }) {
  const showTitle = sidebar !== "watch" && sidebar !== "setting";

  return (
    <header className="m-2 flex h-fit items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-dark-100 rounded-3xl p-6"
      >
        <motion.img
          onClick={() => setSidebar("menu")}
          whileTap={{ scale: 0.94 }}
          className="h-full w-10 cursor-pointer"
          src={logo}
          alt="logo 30nama"
        />
      </motion.div>

      <AnimatePresence>
        {showTitle && (
          <motion.div
            key="sidebar-title"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-3xl text-white/90"
          >
            <h1 className="cursor-default">30nama</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SidebarHeader;
