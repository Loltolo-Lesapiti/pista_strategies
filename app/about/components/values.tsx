import Image from "next/image";

export const Values = () => {
  return (
    <div className="flex flex-col justify-start items-center md:flex-row justify-between items-center mt-16 px-4 md:px-0">
      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:mb-0 w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            alt="Picture of the author"
            className=""
            height={35}
            src="/vision.webp"
            width={35}
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Our Vision</h4>
        <p className="text-base font-normal text-[#7b7b7b] md:pr-4">
          To be the leading digital agency that transforms brands with
          innovative solutions, fostering growth and success in the digital
          world.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:mb-0 w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            alt="Picture of the author"
            className=""
            height={35}
            src="/mission.webp"
            width={35}
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Our Mission</h4>
        <p className="text-base font-normal text-[#7b7b7b] md:pr-4">
          Our mission is to empower brands by delivering innovative digital
          solutions that drive engagement and foster sustainable growth.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:mb-0 w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            alt="Picture of the author"
            className=""
            height={35}
            src="/principle.webp"
            width={35}
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Our Principle</h4>
        <p className="text-base font-normal text-[#7b7b7b] md:pr-4">
          Put our clients at the heart of everything we do, understanding their
          unique needs and goals to provide tailored strategies.
        </p>
      </div>
    </div>
  );
};
