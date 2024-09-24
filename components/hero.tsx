"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import CustomButton from "./buttonUi";

export const Hero = () => {
  const outerRectRef = useRef<HTMLDivElement>(null);
  const innerRectRef = useRef<HTMLDivElement>(null);
  const bottomLeftRectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        outerRectRef.current &&
        innerRectRef.current &&
        bottomLeftRectRef.current
      ) {
        const scrollY = window.scrollY;
        const outerMovement = scrollY * 0.1;
        const innerMovement = scrollY * 0.15;
        const bottomLeftMovement = scrollY * 0.05;

        outerRectRef.current.style.transform = `translate(${outerMovement}px, ${-outerMovement}px)`;
        innerRectRef.current.style.transform = `translate(${-innerMovement}px, ${innerMovement}px)`;
        bottomLeftRectRef.current.style.transform = `translate(${-bottomLeftMovement}px, ${bottomLeftMovement}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center md:gap-16 relative pt-[110px] pb -[80px]">
      <div className="flex flex-col items-start justify-items-start md:w-2/5 shrink-0 px-4 md:px-0 md:pt-8">
        <h3 className="text-white font-medium py-2 px-8 bg-[#ffffff38] text-base rounded-lg max-w-fit uppercase mb-6">
          Welcome to Pista Strategies
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Your Partner from an Idea to Market Leader
        </h1>
        <p className="font-normal text-base mb-8 max-w-fit text-[#ffffffb8] normal-case">
          We Brainstorm, Analyze and Develop
        </p>
        <CustomButton
          backgroundColor="#ef8450"
          body=" Get Started"
          href="/contact"
        />
      </div>
      <div className="relative w-full max-w-3xl mx-auto mt-8 md:mt-0">
        <div
          ref={outerRectRef}
          className="absolute top-0 right-0 w-40 h-40 md:w-52 md:h-52 bg-[#ef8450] bg-opacity-50 rounded-[15px] pointer-events-none z-30 transition-transform duration-300 ease-out"
        >
          <div
            ref={innerRectRef}
            className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 bg-[#ef8450] rounded-[15px] z-40 transition-transform duration-300 ease-out"
          />
        </div>
        <div
          ref={bottomLeftRectRef}
          className="absolute -bottom-8 -left-8 w-64 h-64 md:w-80 md:h-80 bg-emerald-100 bg-opacity-15 rounded-[15px] z-10 transition-transform duration-300 ease-out"
        />
        <div className="relative z-20">
          <Image
            alt="Hero Image"
            className="rounded-[15px] shadow-xl w-full h-auto"
            height={525}
            src="/test.webp"
            width={707}
          />
        </div>
      </div>
    </div>
  );
};
