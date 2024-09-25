export const Services = () => {
  const services = [
    {
      title: "Business Writing",
      duties: [
        "Business Plan for SMEs",
        "Business Proposals",
        "Investor Pitch Deck",
      ],
      description:
        "We craft personalized business plans with a clear roadmap on how to grow your business, including market analysis, financial projections & operational plan.",
    },
    {
      title: "Grant Writing",
      duties: ["Grant Writing ", "Grant Web Research ", "Grant Application "],
      description:
        "We craft visually compelling pitch decks that communicate your vision and value proposition to investors and other stakeholders.",
    },
    {
      title: "MARKET RESEARCH",
      duties: [
        "Comprehensive Market Research",
        "Competitor Research ",
        "SWOT Analysis ",
      ],
      description:
        "We do comprehensive web research tailored to your industry, including competitor analysis, industry analysis, customer insights, and a SWOT analysis helping you understand your industry better. ",
    },
  ];

  return (
    <div className=" py-12 px-4 bg-white md:px-10">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className=" h-[100px] w-[95%] ml-[5%] bg-[#10393b] mr-0 flex justify-center items-center rounded-l-[15px]">
          <p className="text-center text-4xl lg:text-6xl font-bold text-[#fffaf1] ">
            Our Services
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items center md:flex-row md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-start items-start border-4 border-[#10393b]  px-4 py-4 rounded-[15px] md:gap-8 md:w-2/5"
            >
              <h4 className="text-xl md:text-2xl font-bold text-[#10393b] mt-8 md:mt-0 uppercase">
                {service.title}
              </h4>
              <div className="flex flex-col gap-[10px] justify-start items-start">
                {service.duties.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-4 justify-center items-center"
                  >
                    <div className="flex w-[14px] h-[14px] p-2 bg-[#ef8450] rounded-full" />
                    <h4 className="text-[#10393b] text-sm md:text-base font-normal">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base font-normal text-[#7b7b7b] mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
