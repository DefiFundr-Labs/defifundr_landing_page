import FeatureCard from "./FeatureCard";

const features = [
  {
    title: 'Automated Payroll Processing',
    description: 'Set up payroll schedules, approve payments, and let our system handle the rest.',
    backgroundImage: '/images/why-us-1.png',
    imageClassName: 'absolute right-0 bottom-0 w-[90%] h-auto sm:w-[400px] xs:w-[330px] md:w-[90%]'
  },
  {
    title: 'Fiat & Crypto Payments',
    description: 'Pay employees and freelancers in USDC, ETH, SOL, or bank transfers seamlessly.',
    backgroundImage: '/images/why-us-2.png',
    imageClassName: 'absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-auto sm:w-full xs:!h-[50%] sm:!h-[50%] md:w-full'
  },
  {
    title: 'Invoice Management',
    description: 'Create and send invoices, track payments, and manage your finances effortlessly.',
    backgroundImage: '/images/why-us-3.png',
    imageClassName: 'absolute right-0 bottom-0 w-[90%] h-auto sm:w-[400px] xs:w-[330px] md:w-[90%]'
  }
]

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 py-[7rem]">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-[#373737]">WHY CHOOSE US</h2>
        <h1 className="text-[23px] font-bold mt-4 xs:text-[40px]">
          Reliable, secure, and automated<br />
          payroll solutions.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="cursor-pointer hover:scale-105 transition duration-300">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs; 