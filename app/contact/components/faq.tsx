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
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
        FAQ
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mt-[10px] mb-[30px] text-[#10393b]">
        Frequently Asked Questions
      </h2>
      <FAQItem question="What is a digital agency and what services do they offer?">
        Answer content goes here...
      </FAQItem>
      <FAQItem question="How can a digital agency help my business grow?">
        Answer content goes here...
      </FAQItem>
      <FAQItem question="How do I choose the right digital agency for my business?">
        Answer content goes here...
      </FAQItem>
      <FAQItem question="What are the common challenges faced by digital agencies?">
        Answer content goes here...
      </FAQItem>
      <FAQItem question="How long does it take to see results from digital marketing efforts?">
        Answer content goes here...
      </FAQItem>
    </div>
  );
};

export default FAQSection;
