import logomark from "/logo/logomark.png";
import { motion } from "motion/react";
import { Link } from "react-router";

function LogoMark() {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link to="/">
        <img className="h-8 lg:h-10" src={logomark} alt="logo" />
      </Link>
    </motion.div>
  );
}

export default LogoMark;
