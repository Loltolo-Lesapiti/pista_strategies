"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { FadeInContainer, CardAnimation } from "./animation";

export const Services = () => {
  const services = [
    {
      title: "Business Writing",
      duties: ["Business plan", "Business Proposal"],
      description:
        "We craft personalized business plans with a clear roadmap on how to grow your business, including market analysis, financial projections & operational plans, and marketing plans.",
    },
    {
      title: "Grant Writing",
      duties: ["Grant Writing", "Grant Application"],
      description:
        "We take the client's burden of writing and submitting proposals to request funding from government agencies, foundations, and other organizations.",
    },
    {
      title: "Market Research",
      duties: ["Comprehensive Market Research", "Industry Analysis"],
      description:
        "We do comprehensive web research that tailored to your business, including competitor analysis, industry analysis, customer insights, and a SWOT analysis. This will help you understand your industry better.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-12 text-[#10393b]">
          Our Services
        </h2>
        <FadeInContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <CardAnimation
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="bg-white shadow-lg h-full flex flex-col">
                <CardHeader className="bg-[#10393b] text-white p-6">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.duties.map((duty, dutyIndex) => (
                      <Chip key={dutyIndex} color="warning" variant="flat">
                        {duty}
                      </Chip>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                </CardBody>
              </Card>
            </CardAnimation>
          ))}
        </FadeInContainer>
      </div>
    </div>
  );
};

export default Services;
