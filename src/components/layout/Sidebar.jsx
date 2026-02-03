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
    <div className="sticky top-2 z-50 flex w-fit flex-col">
      <SidebarHeader sidebar={sidebar} setSidebar={setSidebar} />

      <div className="mr-0 flex">
        <MainNav sidebar={sidebar} setSidebar={setSidebar} />

        {(sidebar === "menu" ||
          sidebar === "discover" ||
          sidebar === "profile") && (
          <div className="bg-dark-100 flex min-w-56 flex-col justify-between gap-12 rounded-3xl p-8">
            {sidebar === "menu" && <MenuNav />}
            {sidebar === "discover" && <DiscoverNav />}
            {sidebar === "profile" && <ProfileNav />}
            <BuyNowBtn />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
