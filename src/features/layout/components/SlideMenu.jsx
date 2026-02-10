import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import { Link, NavLink } from "react-router";

function SlideMenu({ isOpen, setIsOpen, navItems }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="bg-dark-3 fixed top-0 right-0 z-50 h-screen w-full md:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-10 text-white">
            <button onClick={() => setIsOpen(false)} className="self-end">
              <HiOutlineXMark className="h-7 w-7" />
            </button>

            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/80 transition hover:text-white"
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-white/20 px-4 py-3 text-center transition hover:bg-white/10"
              >
                Sign up
              </Link>

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-primary-darker rounded-xl px-4 py-3 text-center font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SlideMenu;
