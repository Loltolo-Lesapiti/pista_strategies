import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:items-start md:gap-16">
        <div className="flex flex-col items-start justify-around shrink-0 md:flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b] text-justify">
            Who We Are
          </h2>
          <p className="font-normal text-base mt-[10px] mb-[35px] text-[#7b7b7b] normal-case text-justify">
            Pista Logistics is a business writing organization committed to helping
            small and medium-sized businesses achieve their full potential. With
            a team of experienced consultants and a results-driven approach, we
            consistently exceed expectations and empower our clients to succeed.
            Guided by professionalism, confidentiality, and efficiency, we
            simplify the path to business growth and success.
          </p>
        </div>
        <div className="flex flex-col items-start justify-around shrink-0 md:flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b] text-justify">
            Our Story
          </h2>
          <p className="font-normal text-base mt-[10px] mb-[35px] text-[#7b7b7b] normal-case text-justify">
            After years of working with small and medium-sized businesses (SMEs)
            and venture incubators, our founder witnessed countless early-stage
            entrepreneurs, established business owners, and fund seekers miss
            out on crucial grant opportunities due to the lack of a solid
            business plan. Many million-dollar ideas were overlooked by
            investors simply because they lacked a clear strategy and a
            compelling value proposition. Driven by the desire to change this,
            our founder created Pista Logistics to help businesses not only
            survive but thrive by effectively communicating their value to
            customers. Our approach ensures your business remains the focal
            point, attracting investors, securing grants, enhancing brand
            awareness, and winning over customers.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-full mb-8 md:mb-0 relative">
        <Image
          alt="Picture of the author"
          className="relative rounded-[15px] shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto z-20"
          height={500}
          src="/about.webp"
          width={1000}
        />
      </div>
    </div>
  );
};
