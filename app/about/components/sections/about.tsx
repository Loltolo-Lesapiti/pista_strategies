import { About } from "../about";
import { Statements } from "../values";
// import StatsComponent from "../starts";

import Values from "@/components/values";
export const AboutSection = () => {
  return (
    <section className="px-4 py-[70px] md:px-10">
      <About />
      <Statements />
      {/* <StatsComponent /> */}
      <Values />
    </section>
  );
};
