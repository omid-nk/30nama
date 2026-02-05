import { motion } from "motion/react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="mx-auto mt-2 flex max-w-380 gap-2">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex w-full min-w-0 flex-1 flex-col gap-2.5">
        <header className="flex h-26 items-center justify-end">
          <Header />
        </header>
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 px-2"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
