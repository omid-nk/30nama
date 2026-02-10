import { motion } from "motion/react";
import { useState } from "react";

import { navItems } from "../../data/navItems";

import LogoMark from "./components/LogoMark";
import Btns from "./components/Btns";
import NavItems from "./components/NavItems";
import SlideMenu from "./components/SlideMenu";

function StickyHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-dark-2/40 border-light/10 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xs"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <LogoMark />
        <NavItems navItems={navItems} />
        <SlideMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
        <Btns setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </motion.header>
  );
}

export default StickyHeader;
