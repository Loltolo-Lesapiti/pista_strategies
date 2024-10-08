"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CustomButton from "./buttonUi";

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Image"
          src="/test.webp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#10393b] bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Partner from an Idea to Market Leader
        </motion.h1>
        <motion.p
          className="font-semibold text-xl mb-8 text-white drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Brainstorm, Design and Develop
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CustomButton
            backgroundColor="#ef8450"
            body="Get Started"
            href="/contact"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
