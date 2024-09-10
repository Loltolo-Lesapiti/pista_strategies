import { TeamCard } from "./teamCard";

export const Team = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-sm sm:text-base uppercase px-4 py-2 rounded-full">
        our team
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#10393b] text-center mb-4 md:mb-8">
        Meet Our Expertise
      </h2>
      <TeamCard />
    </div>
  );
};
