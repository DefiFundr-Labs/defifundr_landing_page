import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 text-white bg-black">
      <div className="container relative grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Left Column: Introduction */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center md:relative md:top-[-40px] md:w-3/4 lg:w-4/5">
          <h2 className="text-4xl font-bold text-white">Common Questions</h2>
          <p className="max-w-lg mt-4 leading-relaxed text-gray-500">
            In this section, we address common queries about our application
            features, subscription options, and support services to help you
            navigate your experience effortlessly.
          </p>
          <button className="mt-6 w-[124px] h-[52px] bg-white text-black font-semibold rounded-lg border border-gray-300 shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="w-full p-6 bg-black rounded-lg shadow-lg">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-3 bg-[#222222] p-5 rounded-lg cursor-pointer transition hover:bg-[#2c2c2c]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-white">
                  {item.question}
                </h3>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-300 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
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
