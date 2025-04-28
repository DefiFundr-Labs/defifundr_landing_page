"use client";
import { useEffect } from "react";

import { GoVerified } from "react-icons/go";
import { inViewSensor } from "tailwind-inview";
import securePaymentsCard from "../../assets/images/secure_payments.webp";
import { SaveIcon } from "../../assets/svg/general";
import IconText from "./IconText";

const SecurePayments = () => {
  useEffect(inViewSensor, []);
  return (
    <div className="container flex flex-col-reverse items-center justify-between gap-12 md:gap-25 xl:flex-row bg-[#F2F2F2] py-15">
      <div className="flex justify-center ">
        <img
          src={securePaymentsCard}
          alt="Blockchain Visualization"
          className="object-cover mt-5 transition duration-200 ease-linear rounded-lg shadow-2xl md:max-w-xl transform-gpu hover:scale-105 max-h-[30.3rem]"
        />
      </div>
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h2 className=" h2  lg:text-left inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Enjoy Secure Payments with <br className="hidden lg:block" /> Smart
            Contracts
          </h2>
          <p className=" text-neutralColor-1000 text-base md:text-lg lg:text-left inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein ">
            Leverage blockchain-powered smart contracts to guarantee salary
            payments without intermediaries. Funds are locked and automatically
            released, reducing errors and ensuring transparency.
          </p>
        </div>
        <div className="flex flex-col items-start w-full gap-6 mt-10 md:gap-32 sm:flex-row">
          <IconText
            img={<SaveIcon />}
            title="Tamperproof Payments"
            description="Smart contracts execute payments automatically, eliminating the risk of fraud or unauthorized changes."
          />
          <IconText
            img={<GoVerified className="border-gray-600 border-1 " />}
            title="Instant Payment Verification"
            description="Every transaction is recorded on the blockchain, providing a transparent and verifiable payment trail."
          />
        </div>
      </div>
    </div>
  );
};

export default SecurePayments;
