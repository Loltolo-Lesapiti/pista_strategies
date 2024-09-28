import Image from "next/image";

import CustomButton from "./buttonUi";

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Image"
          src="/test.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#10393b] bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Your Partner from an Idea to Market Leader
        </h1>
        <p className="font-semibold text-xl mb-8 text-white drop-shadow-md">
          We Brainstorm, Analyze and Develop
        </p>
        <CustomButton
          backgroundColor="#ef8450"
          body="Get Started"
          href="/contact"
        />
      </div>
    </div>
  );
};

export default Hero;
