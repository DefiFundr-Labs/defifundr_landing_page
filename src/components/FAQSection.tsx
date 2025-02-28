import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqItems = [
  { question: "How does automated payroll work on your platform?", answer: "." },
  { question: "Can I pay some employees in fiat and others in crypto?", answer: "." },
  { question: "Is my payroll data secure?", answer: "." },
  { question: "Do I need technical knowledge to use this platform?", answer: "." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        
        {/* Left Column: Introduction */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center md:relative md:top-[-40px] md:w-3/4 lg:w-4/5">
          <h2 className="text-4xl font-bold text-white">Common Questions</h2>
          <p className="text-gray-500 mt-4 leading-relaxed max-w-lg">
            In this section, we address common queries about our application
            features, subscription options, and support services to help you
            navigate your experience effortlessly.
          </p>
          <button className="mt-6 w-[124px] h-[52px] bg-white text-black font-semibold rounded-lg border border-gray-300 shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-full">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-3 bg-[#222222] p-5 rounded-lg cursor-pointer transition hover:bg-[#2c2c2c]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white text-base font-medium">{item.question}</h3>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-300 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>
              {openIndex === index && <p className="text-gray-400 mt-3">{item.answer}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
