import { motion } from "motion/react";

function BuyNowBtn() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{
        y: -2,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.96 }}
      className="border-primary hover:bg-primary w-full cursor-pointer rounded-xl border p-1.5 transition-colors hover:text-black"
    >
      Buy Now
    </motion.button>
  );
}

export default BuyNowBtn;
