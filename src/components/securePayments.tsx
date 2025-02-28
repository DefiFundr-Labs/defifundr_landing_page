"use client";
import { useEffect } from "react";

import { GoVerified } from "react-icons/go";
import { inViewSensor } from "tailwind-inview";

const SecurePayments = () => {
  useEffect(inViewSensor, []);
  return (
    <div className="container flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
      <div className="flex justify-center ">
        <img
          src="/Lock.svg"
          alt="Blockchain Visualization"
          className="object-cover mt-5 transition duration-200 ease-linear rounded-lg shadow-2xl aspect-square transform-gpu hover:scale-105"
        />
      </div>
      <div className="flex-1 max-w-4xl p-5 ">
        <h1 className="font-[HK Grotesk] font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[45.8px] tracking-[-4%] text-center lg:text-left inview-once opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
          Enjoy Secure Payments with <br className="hidden lg:block" /> Smart
          Contracts
        </h1>
        <p className="mt-5 text-gray-700 text-sm md:text-md text-center lg:text-left inview-once opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
          Leverage blockchain-powered smart contracts to guarantee salary
          payments without intermediaries. Funds are locked and automatically
          released, reducing errors and ensuring transparency.
        </p>
        <div className="flex flex-col items-start w-full gap-5 mt-10 md:flex-row">
          <div className="items-start w-full md:w-1/2 p-2 inview-once opacity-0 [--slidein-delay:700ms] inview:animate-slidein">
            <div className="border border-gray-300 rounded-md p-1 flex items-center justify-center w-[30px] h-[30px]">
              <img
                src="/save.svg"
                height={15}
                width={15}
                alt="save"
                className=""
              />
            </div>
            <div className="mt-5">
              <h1 className="text-lg font-bold">Tamperproof Payments</h1>
              <p className="text-xs text-gray-700 md:text-sm">
                Smart contracts execute payments automatically, eliminating the
                risk of fraud or unauthorized changes.
              </p>
            </div>
          </div>
          <div className="items-start w-full md:w-1/2 p-2 inview-once opacity-0 [--slidein-delay:700ms] inview:animate-slidein">
            <div className="border border-gray-300 rounded-md p-1 flex items-center justify-center w-[30px] h-[30px]">
              <GoVerified className="border-gray-600 border-1 " />
            </div>
            <div className="mt-5">
              <h1 className="font-semibold ">Instant Payment Verification</h1>
              <p className="text-xs text-gray-700 md:text-sm">
                Every transaction is recorded on the blockchain, providing a
                transparent and verifiable payment trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurePayments;
