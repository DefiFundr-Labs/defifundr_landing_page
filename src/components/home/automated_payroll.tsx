import React from "react";
import IconText from "./IconText";
import { AutoTaxIcon, CalenderIcon } from "../../assets/svg/general";
import virtualCard from "../../assets/images/Virtual Cards .webp";

const PayrollSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-between py-15 md:py-32 bg-[#F6F6F6] xl:flex-row gap-12 md:gap-25">
      {/* Left Section */}
      <div className="space-y-8 ">
        <div className="space-y-4">
          <h2 className="text-black h2 inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Automated Payroll – Pay on time, every time.
          </h2>
          <p className="mt-4 text-lg text-neutralColor-1000  inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Eliminate manual payroll calculations and delays. Our platform
            automates salary disbursements based on predefined schedules,
            ensuring employees get paid accurately and on time—every time.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-10 sm:flex-row lg:gap-32 ">
          <IconText
            img={<CalenderIcon />}
            title="Scheduled Payments"
            description="Set up recurring payroll cycles and let the system handle disbursements automatically."
          />
          <IconText
            img={<AutoTaxIcon />} // altText="Auto-Tax Deductions"
            title="Auto-Tax Deductions"
            description="Automatically calculate and deduct taxes, ensuring compliance with local regulations."
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:flex-shrink-0 md:pl-8">
        <img
          src={virtualCard}
          alt="Payment Overview"
          className="max-h-[30.3rem]"
        />
      </div>
    </div>
  );
};

export default PayrollSection;
