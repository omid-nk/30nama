import { motion } from "motion/react";
import logo from "/public/images/logo/logo-small.png";

function SidebarHeader({ sidebar, setSidebar }) {
  const showTitle = sidebar !== "watch" && sidebar !== "setting";

  return (
    <header className="m-2 flex h-fit items-center gap-4">
      <div className="bg-dark-100 rounded-3xl p-6">
        <motion.img
          onClick={() => setSidebar("menu")}
          whileTap={{ scale: 0.94 }}
          className="h-full w-10 cursor-pointer"
          src={logo}
          alt="logo 30nama"
        />
      </div>

      {showTitle && (
        <div className="text-3xl text-white/90">
          <h1 className="cursor-default">30nama</h1>
        </div>
      )}
    </header>
  );
}

export default SidebarHeader;
