import { motion } from "motion/react";
import { Link } from "react-router";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

const MotionLink = motion(Link);

function Btns({ setIsOpen, isOpen }) {
  return (
    <>
      {/* desktop */}
      <div className="hidden items-center gap-3 md:flex">
        <MotionLink
          to="/search"
          className="text-white/80 transition hover:text-white"
        >
          <HiOutlineMagnifyingGlass className="h-6 w-6" />
        </MotionLink>

        <Link
          to="/signup"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
        >
          Sign up
        </Link>

        <MotionLink
          to="/login"
          initial={{ backgroundColor: "#831010" }}
          whileHover={{ backgroundColor: "#83101090" }}
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
        >
          Login
        </MotionLink>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <div className="flex items-center gap-4 md:hidden">
          <Link to={"/search"} className="text-white">
            <HiOutlineMagnifyingGlass className="h-6 w-6" />
          </Link>

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="text-white"
          >
            {isOpen ? (
              <HiOutlineXMark className="h-7 w-7" />
            ) : (
              <HiOutlineBars3 className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Btns;
