import { CreditCardIcon, SettingsIcon, WavyLines } from "./icons/payments";

export const MultiPaymentOptions = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-11/12 mx-auto gap-[2.5rem] lg:gap-[5rem] items-center pt-[3rem] pb-[3rem] lg:pt-[5rem] lg:pb-[5rem]">
      <div className="w-full h-full rounded-[1.5rem] lg:w-1/2 flex justify-center bg-[#DED0FB] flex flex-col pt-[0.5rem] pb-[0.5rem] overflow-hidden">
        <div className="relative w-full">
          <WavyLines />
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-5 lg:bottom-0"
          >
            <img src="/img/usdt.svg" alt="usdt" className="scale-70" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-10 lg:bottom-0 lg:top-8 left-15 lg:left-20"
          >
            <img src="/img/usd.svg" alt="usd" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-[10px] lg:bottom-[-10px] left-[35%]"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 top-8 left-[45%]"
          >
            <img src="/img/euro.svg" alt="euro" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 top-0 right-[25%]"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-0 right-0 lg:right-10"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </div>
        </div>
        <div className="relative w-full">
          <WavyLines classStyles="translate-x-6" />
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 bottom-5 lg:bottom-0"
          >
            <img src="/img/busd.svg" alt="busd" className="scale-70" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 bottom-10 lg:bottom-0 lg:top-8 left-15 lg:left-20"
          >
            <img src="/img/usdt.svg" alt="usdt" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 bottom-[10px] lg:bottom-[-10px] left-[35%]"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 top-8 left-[45%]"
          >
            <img src="/img/usdt.svg" alt="usdt" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 top-0 right-[25%]"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-6 bottom-0 right-0 lg:right-10"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </div>
        </div>
        <div className="relative w-full">
          <WavyLines />
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-5 lg:bottom-0"
          >
            <img src="/img/usdt.svg" alt="usdt" className="scale-70" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-10 lg:bottom-0 lg:top-8 left-15 lg:left-20"
          >
            <img src="/img/usd.svg" alt="usd" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-[10px] lg:bottom-[-10px] left-[35%]"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 top-8 left-[45%]"
          >
            <img src="/img/euro.svg" alt="euro" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 top-0 right-[25%]"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </div>
          <div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute translate-x-8 bottom-0 right-0 lg:right-10"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </div>
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
