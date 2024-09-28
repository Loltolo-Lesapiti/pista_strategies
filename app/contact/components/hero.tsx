import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Image"
          src="/test.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#10393b] bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          GET IN TOUCH WITH US
        </h1>
      </div>
    </div>
  );
};

export default Hero;
