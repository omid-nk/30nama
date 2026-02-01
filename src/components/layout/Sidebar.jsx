import { motion, AnimatePresence } from "motion/react";
import SidebarHeader from "./components/SidebarHeader";
import MainNav from "./components/MainNav";
import MenuNav from "./components/MenuNav";
import DiscoverNav from "./components/DiscoverNav";
import BuyNowBtn from "./components/BuyNowBtn";
import ProfileNav from "./components/ProfileNav";
import { useState } from "react";

function Sidebar() {
  const [sidebar, setSidebar] = useState("menu");

  return (
    <div className="sticky top-0 z-50 flex w-fit flex-col">
      <SidebarHeader sidebar={sidebar} setSidebar={setSidebar} />

      <div className="mr-0 flex">
        <MainNav sidebar={sidebar} setSidebar={setSidebar} />

        <AnimatePresence mode="wait">
          {(sidebar === "menu" ||
            sidebar === "discover" ||
            sidebar === "profile") && (
            <motion.div
              key="sidebar-content"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="bg-dark-100 flex min-w-56 flex-col justify-between gap-12 rounded-3xl p-8"
            >
              {sidebar === "menu" && <MenuNav />}
              {sidebar === "discover" && <DiscoverNav />}
              {sidebar === "profile" && <ProfileNav />}
              <BuyNowBtn />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Sidebar;
