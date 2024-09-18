"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
  { id: 1, src: "/logo1.webp", alt: "Logo 1" },
  { id: 2, src: "/logo1.webp", alt: "Logo 2" },
  { id: 3, src: "/logo1.webp", alt: "Logo 3" },
  { id: 4, src: "/logo1.webp", alt: "Logo 4" },
  { id: 5, src: "/logo1.webp", alt: "Logo 5" },
  { id: 6, src: "/logo1.webp", alt: "Logo 6" },
];

export const Clients = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition - 1) % 100);
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="w-full h-[90px] bg-[#ef8450] overflow-hidden flex justify-center">
      <div
        className="flex flex-row justify-center items-center animate-scroll"
        style={{
          transform: `translateX(${scrollPosition}%)`,
          width: "200%",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex-shrink-0 w-1/6 px-4">
            <Image
              alt={logo.alt}
              height={50}
              objectFit="contain"
              src={logo.src}
              width={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
