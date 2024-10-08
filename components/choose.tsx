"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import { MotionImage, FadeInContainer, FadeInItem } from "./animation";
import { IndustryIcon, ConsultingIcon, ValueCreationIcon } from "./icons";

export default function Choose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <FadeInContainer className="flex flex-col gap-8 md:flex-row justify-between items-center md:px-0">
      <FadeInItem className="flex flex-col justify-center items-center w-full md:w-1/2 gap-4 relative mb-16 md:mb-0 ">
        <MotionImage
          alt="Image of team at work"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto"
          height={500}
          src="/choose.webp"
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

      <FadeInItem className="flex flex-col items-start mt-[55px] justify-center w-full md:w-1/2 shrink-0">
        <h2 className="text-4xl md:text-6xl font-semibold mt-[20px] mb-[10px] text-[#10393b]">
          Why Work with us
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case">
          We partner with you throughout your journey. We will help you
          brainstorm your idea, design and deliver your unique value to your
          customers. Our unique approach allows our clients to rapidly scale
          their business with full confidence. We achieve this through;
        </p>
        <FadeInItem className="flex flex-col justify-start gap-[10px]">
          {[
            { Icon: IndustryIcon, text: "Deep Industry Experience" },
            { Icon: ConsultingIcon, text: "Consulting Expertise" },
            { Icon: ValueCreationIcon, text: "Rapid Value Creation" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 justify-start items-center"
            >
              <div className="flex w-[45px] h-[45px] p-2 justify-center items-center bg-[#ef8450] rounded-full text-white">
                <item.Icon />
              </div>
              <h4 className="text-[#10393b] text-lg md:text-xl font-semibold">
                {item.text}
              </h4>
            </div>
          ))}
        </FadeInItem>
      </FadeInItem>
    </FadeInContainer>
  );
}
