import WhyChooseUsCard from "./WhyChooseUsCard";
import why_us_1 from "../../assets/images/why-us-1.png";
import why_us_2 from "../../assets/images/why-us-2.png";
import why_us_3 from "../../assets/images/why-us-3.png";
const features = [
  {
    title: "Automated Payroll Processing",
    description:
      "Set up payroll schedules, approve payments, and let our system handle the rest.",
    backgroundImage: why_us_1,
    imageClassName: " w-full flex items-center justify-end  ",
  },
  {
    title: "Fiat & Crypto Payments",
    description:
      "Pay employees and freelancers in USDC, ETH, SOL, or bank transfers seamlessly.",
    backgroundImage: why_us_2,
    imageClassName: "w-full ",
  },
  {
    title: "Invoice Management",
    description:
      "Create and send invoices, track payments, and manage your finances effortlessly.",
    backgroundImage: why_us_3,
    imageClassName: " w-full flex items-center justify-end  ",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container bg-white py-[7.5rem] space-y-14">
      <div className="space-y-10 text-center ">
        <p className="text-sm uppercase tracking-wider text-[#373737]">
          WHY CHOOSE US
        </p>
        <h2 className="text-[1.43rem] font-semibold mt-4 sm:text-[2.5rem]">
          Reliable, secure, and automated
          <br />
          payroll solutions.
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-4 lg:justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="transition duration-300 cursor-pointer hover:scale-105"
          >
            <WhyChooseUsCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
