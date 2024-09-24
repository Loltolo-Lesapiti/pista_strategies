// import Link from "next/link";

import {
  // ArrowIcon,
  IndustryIcon,
  ConsultingIcon,
  ValueCreationIcon,
} from "./icons";

export const Services = () => {
  const services = [
    {
      title: "Business Plan, Business Proposal and Investor Pitch Deck",
      description:
        "We craft personalized, comprehensive business plans, including market analysis, financial projections, and operational strategies.",
      icon: IndustryIcon,
    },
    {
      title: "Grant Writing, Grant Research and Grant Application",
      description:
        "We specialize in grant writing compelling proposals for funding, partnerships, and contracts.",
      icon: ConsultingIcon,
    },
    {
      title:
        "Comprehensive Market Research, Competitor Research, SWOT Analysis",
      description:
        "Our team helps non-profits and businesses secure funding through expertly written grant proposals.",
      icon: ValueCreationIcon,
    },
  ];

  return (
    <div className="py-12 bg-[#ffffff38]">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col gap-0">
          <p className="text-center mb-8 text-4xl lg:text-6xl font-bold text-[#10393b] ">
            Our Services
          </p>
          <p className="text-center mb-12 font-normal text-sm lg:text-base text-[#7b7b7b] normal-case">
            We empower small and medium size businesses to provide the best
            possible quality for their clients through our services.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col p-6 rounded-lg shadow-md  justify-center items-center md:gap-8"
            >
              <div className="abolute top-0  flex w-[60px] h-[60px] p-2 justify-center items-center bg-[#10393b] rounded-full text-white">
                <service.icon className="w-36 h-36 mb-4  text-3xl md:text-4xl lg:text-5xl font-semibold text-[#10393b] " />
              </div>

              <h4 className="mb-2 text-xl lg:text-2xl font-bold text-[#10393b]">
                {service.title}
              </h4>
              <p className="mb-4 text-sm lg:text-base font-normal text-[#7b7b7b]">
                {service.description}
              </p>
              {/* <Link
                href="#"
                className="inline-flex items-center text-[#ef8450] hover:text-black text-sm lg:text-base font-normal"
              >
                Read more <ArrowIcon className="ml-2" />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
