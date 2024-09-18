"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import CustomButton from "./buttonUi";

export const About = () => {
  const outerRectRef = useRef<HTMLDivElement>(null);
  const innerRectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (outerRectRef.current && innerRectRef.current) {
        const scrollY = window.scrollY;
        const outerMovement = scrollY * 0.1;
        const innerMovement = scrollY * 0.15;

        outerRectRef.current.style.transform = `translate(${outerMovement}px, ${-outerMovement}px)`;
        innerRectRef.current.style.transform = `translate(${innerMovement}px, ${-innerMovement}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-start justify-center gap-4 md:gap-16">
      <div className="flex flex-col items-start justify-around md:w-1/2 shrink-0 md:px-0 md:pt-8">
        <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
          About
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b]">
          Who We Are
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case text-justify">
          Pista Strategies is a business writing agency committed to helping
          small and medium-sized businesses achieve their full potential. With a
          team of experienced consultants and a results-driven approach, we
          consistently exceed expectations and empower our clients to succeed.
          Guided by professionalism, confidentiality, and efficiency, we
          simplify the path to business growth and success.
        </p>
        <CustomButton
          backgroundColor="#ef8450"
          body="More about us"
          href="/about"
        />
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0 relative">
        <div
          ref={outerRectRef}
          className="absolute top-0 left-0 w-40 h-40 md:w-52 md:h-52 bg-[#ef8450] bg-opacity-50 rounded-[15px] pointer-events-none z-30 transition-transform duration-300 ease-out"
        >
          <div
            ref={innerRectRef}
            className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-[#ef8450] rounded-[15px] z-40 transition-transform duration-300 ease-out"
          />
        </div>
        <Image
          alt="Picture of the author"
          className="relative rounded-[15px] shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto z-20"
          height={500}
          src="/test2.webp"
          width={500}
        />
      </div>
    </div>
  );
};
