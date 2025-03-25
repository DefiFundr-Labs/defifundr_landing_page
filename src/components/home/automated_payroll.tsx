import React from "react";
import IconText from "./IconText";
import { AutoTaxIcon, CalenderIcon } from "../../assets/svg/general";
import virtualCard from "../../assets/images/Virtual Cards.png";

const PayrollSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-between py-12 bg-gray-100 md:flex-row">
      {/* Left Section */}
      <div className="max-w-[36rem]">
        <h2 className="text-4xl font-bold leading-tight text-black ">
          Automated Payroll – Pay on time, every time.
        </h2>
        <p className="mt-4 text-lg text-[#2D2F31] ">
          Eliminate manual payroll calculations and delays. Our platform
          automates salary disbursements based on predefined schedules, ensuring
          employees get paid accurately and on time—every time.
        </p>
        <div className="flex flex-col mt-8 md:flex-row md:space-x-12">
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
