import { CreditCardIcon, SettingsIcon, WavyLines } from "./icons/payments";

export const MultiPaymentOptions = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-11/12 mx-auto gap-[2rem] lg:gap-[5rem] items-center">
      <div className="w-full h-full rounded-[1.5rem] lg:w-1/2 flex justify-center bg-[#DED0FB] flex flex-col pt-[0.5rem]">
        <div className="">
          <WavyLines />
        </div>
        <div className="">
          <WavyLines />
        </div>
        <div className="">
          <WavyLines />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[45.8px] tracking-[-4%] text-left">
          Pay employees in crypto, <br className="hidden lg:block" />{" "}
          stablecoins, or traditional fiat.
        </h2>
        <p className="mt-5 text-gray-700 text-sm md:text-md text-left">
          Give employees the freedom to choose their preferred payment method.
          Pay salaries in USDC, SOL, ETH, fiat, or a mix of both—seamlessly.
        </p>
        <div className="flex flex-col md:flex-row w-full mt-10 gap-5 items-start">
          <div className="items-start w-full md:w-1/2 p-2">
            <div className="pl-[0.5rem] lg:pl-[0rem]">
              <CreditCardIcon />
            </div>
            <div className="mt-5">
              <h2 className="text-lg  font-bold">Multi-Currency Support</h2>
              <p className="text-gray-700 text-xs md:text-sm">
                Pay employees in cryptocurrencies like USDC, SOL, ETH, or
                traditional fiat, all within the same platform.
              </p>
            </div>
          </div>
          <div className="items-start w-full md:w-1/2 p-2">
            <div className="pl-[0.5rem] lg:pl-[0rem]">
              <SettingsIcon />
            </div>
            <div className="mt-5">
              <h2 className="text-lg  font-bold">Customizable Payouts</h2>
              <p className="text-xs md:text-sm text-gray-700">
                Split salaries between crypto and fiat, allowing employees to
                receive payments in their preferred combination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
