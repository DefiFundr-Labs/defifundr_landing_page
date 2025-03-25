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
    imageClassName:
      "absolute right-0 bottom-0 w-[90%] h-auto sm:w-[400px] xs:w-[330px] md:w-[90%]",
  },
  {
    title: "Fiat & Crypto Payments",
    description:
      "Pay employees and freelancers in USDC, ETH, SOL, or bank transfers seamlessly.",
    backgroundImage: why_us_2,
    imageClassName:
      "absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-auto sm:w-full xs:!h-[50%] sm:!h-[50%] md:w-full",
  },
  {
    title: "Invoice Management",
    description:
      "Create and send invoices, track payments, and manage your finances effortlessly.",
    backgroundImage: why_us_3,
    imageClassName:
      "absolute right-0 bottom-0 w-[90%] h-auto sm:w-[400px] xs:w-[330px] md:w-[90%]",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container px-12 py-[7rem]">
      <div className="mb-16 text-center">
        <h2 className="text-sm uppercase tracking-wider text-[#373737]">
          WHY CHOOSE US
        </h2>
        <h1 className="text-[23px] font-bold mt-4 xs:text-[40px]">
          Reliable, secure, and automated
          <br />
          payroll solutions.
        </h1>
        <img src={why_us_1} alt="" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
