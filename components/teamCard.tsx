import Image from "next/image";

export const TeamCard = () => {
  const teamMembers = [
    {
      name: "Rufus Stewart",
      role: "Chief Executive Officer",
      image: "/person1.webp",
    },
    {
      name: "Juliana Silva",
      role: "Managing Director",
      image: "/person2.webp",
    },
    {
      name: "Richard Sanchez",
      role: "Head of Marketing",
      image: "/person3.webp",
    },
    {
      name: "Sacha Dubois",
      role: "General Manager Marketing",
      image: "/person4.webp",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-around items-center gap-8 px-4 w-full max-w-7xl mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start gap-2 w-[calc(50%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]"
        >
          <Image
            alt={`Picture of ${member.name}`}
            className="rounded-[15px] w-full h-auto"
            height={345}
            src={member.image}
            width={345}
          />
          <div>
            <h4 className="text-[#10393b] text-lg sm:text-xl font-semibold capitalize mt-2">
              {member.name}
            </h4>
            <p className="font-normal text-sm sm:text-base text-[#7b7b7b] normal-case mt-1 capitalize">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
