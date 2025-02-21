import React from 'react';
import IconText from '../common/IconText';


const PayrollSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-32 py-12 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1 max-w-4xl mb-8 md:mb-0 md:pr-8">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Automated Payroll – Pay on time, every time.
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-2xl leading-7 md:leading-9">
          Eliminate manual payroll calculations and delays. Our platform
          automates salary disbursements based on predefined schedules, ensuring
          employees get paid accurately and on time—every time.
        </p>
        <div className="mt-8 flex flex-col md:flex-row md:space-x-12">
          <IconText
            imgSrc="calender.svg"
            altText="Scheduled Payments"
            title="Scheduled Payments"
            description="Set up recurring payroll cycles and let the system handle disbursements automatically."
          />
          <IconText
            imgSrc="recurring.svg"
            altText="Auto-Tax Deductions"
            title="Auto-Tax Deductions"
            description="Automatically calculate and deduct taxes, ensuring compliance with local regulations."
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:flex-shrink-0 md:pl-8">
        <img
          src="payment_overview.svg"
          alt="Payment Overview"
          className="w-full h-auto md:w-1/2 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default PayrollSection;

