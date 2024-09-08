import { TeamCard } from "./teamCard";
export const Team = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
        our team
      </div>
      <h2 className="text-6xl font-semibold text-[#10393b] text-center mb-4">
        Meet Our Expertise
      </h2>
      <TeamCard />
    </div>
  );
};
