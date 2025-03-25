import { useState } from "react";
import Button from "../common/Button";
import { ArrowDownIcon } from "../../assets/svg/general";

const faqItems = [
  {
    question: "How does automated payroll work on your platform?",
    answer: ".",
  },
  {
    question: "Can I pay some employees in fiat and others in crypto?",
    answer: ".",
  },
  { question: "Is my payroll data secure?", answer: "." },
  {
    question: "Do I need technical knowledge to use this platform?",
    answer: ".",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white bg-black py-15 md:py-20">
      <div className="container relative grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Column: Introduction */}
        <div className="space-y-7">
          <div className="space-y-2">
            <h2 className="text-[2rem] font-semibold leading-[100%] tracking-[-2%px] text-white">
              Common Questions
            </h2>
            <p className="text-lg text-white md:max-w-lg opacity-80">
              In this section, we address common queries about our application
              features, subscription options, and support services to help you
              navigate your experience effortlessly.
            </p>
          </div>
          <div className="flex">
            <Button text="Contact Us" variant="button--secondary" />
          </div>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="w-full bg-black rounded-lg shadow-lg">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-3 bg-[#222222] p-5 rounded-lg cursor-pointer transition hover:bg-[#2c2c2c]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-medium text-white">
                  {item.question}
                </h3>
                <div className="w-[3.4rem] h-[2.4rem] rounded-full bg-[#FFFFFF0D] flex items-center justify-center">
                  <ArrowDownIcon
                    classStyles={` text-gray-300 shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180 transition" : ""
                    }`}
                  />
                </div>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-400">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
