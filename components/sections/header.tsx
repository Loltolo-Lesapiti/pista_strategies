"use client";
import { motion, useScroll, useSpring } from "framer-motion";

import { Navbar } from "../navbar";
const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navbar />
      <motion.div
        className="fixed top-[96px] left-0 right-0 w-full bg-[#ef8450] h-4 z-50 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

export default Header;
