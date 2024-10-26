"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import CustomButton from "./buttonUi";
import { MotionImage, FadeInContainer, FadeInItem } from "./animation";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <FadeInContainer className="flex flex-col-reverse md:flex-row-reverse items-start justify-center gap-4 md:gap-16">
      <FadeInItem className="flex flex-col items-start justify-around md:w-1/2 shrink-0 md:px-0 md:pt-8">
        <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b]">
          Who We Are
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case text-justify">
          Pista Logistics is a business writing organization committed to helping
          small and medium-sized businesses achieve their full potential. With a
          team of experienced consultants and a results-driven approach, we
          consistently exceed expectations and empower our clients to succeed.
          Guided by professionalism, confidentiality, and efficiency, we
          simplify the path to business growth and success.
        </p>
        <FadeInItem>
          <CustomButton
            backgroundColor="#ef8450"
            body="More about us"
            href="/about"
          />
        </FadeInItem>
      </FadeInItem>
      <FadeInItem className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0 relative">
        <MotionImage
          alt="About image"
          className="relative rounded-[15px] shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto z-20"
          height={500}
          src="/test2.webp"
          width={500}
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
      </FadeInItem>
    </FadeInContainer>
  );
};

export default About;
