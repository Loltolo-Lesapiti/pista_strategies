import { About } from "../about";
import { Values } from "../values";

export const AboutSection = () => {
  return (
    <section className="w-full px-4 py-[130px] md:px-10">
      <About />
      <Values />
    </section>
  );
};
