"use client";
interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}
import { useState } from "react";

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`transition-transform duration-200 ${
      isOpen ? "transform rotate-180" : ""
    }`}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[75%] border border-gray-200 rounded-[15px] mb-4">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-teal-800 font-medium">
          <h4 className="text-lg font-bold text-[#10393b]">{question}</h4>
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="w-full mx-auto p-6 bg-orange-50 flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl md:text-6xl font-bold mt-[10px] mb-[30px] text-[#ef8450]">
        Frequently Asked Questions
      </h2>
      <FAQItem question="Which services do you offer?">
        We specialize in business writing services such as business plan
        development, proposal writing, grant writing, pitch deck creation,
        market research, and consulting. Our services are designed to help
        businesses secure funding, grow, and succeed.
      </FAQItem>
      <FAQItem question=" Why do I need a business Plan?">
        A business plan provides a clear roadmap for your business, helping you
        define your vision, operational plan, marketing strategies, how to
        attract investors, secure funding, and make informed decisions. It’s
        essential for any startup or business seeking to grow or scale.
      </FAQItem>
      <FAQItem question="How long does it take to create a business Plan?">
        The timeline varies depending on the complexity of the project and the
        level of research required. Typically, a business plan can take anywhere
        from 2 to 4 weeks. We prioritize quality and detail to ensure the plan
        meets your needs and goals.
      </FAQItem>
      <FAQItem question=" Can you help with grant writing for non-profits?">
        Yes! We specialize in crafting grant proposals for non-profits, ensuring
        they align with the funder’s requirements and increase the chances of
        securing the grant.
      </FAQItem>
      <FAQItem question="What is the process of working with Pista Strategies?">
        We start with an initial consultation to understand your business goals
        and needs. From there, we gather relevant information, conduct necessary
        research, and begin drafting your customized documents. Throughout the
        process, we work closely with you to ensure your vision is accurately
        captured.
      </FAQItem>

      <FAQItem question="How do you ensure confidentiality?">
        Confidentiality is one of our core values. We have strict policies in
        place to protect your business information and intellectual property.
        All client data and discussions are kept private and secure.
      </FAQItem>
      <FAQItem question=" Do you offer revisions?">
        Yes, we offer revisions to ensure that the final product meets your
        expectations. We work collaboratively with our clients and make
        adjustments as needed to ensure complete satisfaction.
      </FAQItem>
      <FAQItem question="What industries do you specialize in?">
        We work across various industries, including technology, healthcare,
        retail, non-profits, and more. Our team is experienced in tailoring
        business documents to fit the unique needs of different industries.
      </FAQItem>
      <FAQItem question=" Can you help improve an existing business plan or proposal?">
        Yes, we provide consulting services to review and enhance your existing
        business plans or proposals. We can help refine your strategy, improve
        your messaging, and ensure your documents are investor-ready.
      </FAQItem>
      <FAQItem question="How can I get started with Pista Strategies?">
        You can get started by contacting us through our website or via
        email/phone. We’ll schedule an initial consultation to discuss your
        needs and how we can assist you in achieving your business goals.
      </FAQItem>
    </div>
  );
};

export default FAQSection;
