
export const MultiPaymentOptions = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-11/12 mx-auto gap-10 items-center">
      <div className="w-full lg:w-1/2 flex justify-center">div</div>
      <div className="p-5 w-full lg:w-1/2">
        <h1 className="font-[HK Grotesk] font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[45.8px] tracking-[-4%] text-center lg:text-left">
          Enjoy Secure Payments with <br className="hidden lg:block" /> Smart
          Contracts
        </h1>
        <p className="mt-5 text-gray-700 text-sm md:text-md text-center lg:text-left">
          Leverage blockchain-powered smart contracts to guarantee salary
          payments without intermediaries. Funds are locked and automatically
          released, reducing errors and ensuring transparency.
        </p>
        <div className="flex flex-col md:flex-row w-full mt-10 gap-5 items-start">
          <div className="items-start w-full md:w-1/2 p-2">
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
              <h1 className="text-lg  font-bold">Tamperproof Payments</h1>
              <p className="text-gray-700 text-xs md:text-sm">
                Smart contracts execute payments automatically, eliminating the
                risk of fraud or unauthorized changes.
              </p>
            </div>
          </div>
          <div className="items-start w-full md:w-1/2 p-2">
            <div className="border border-gray-300 rounded-md p-1 flex items-center justify-center w-[30px] h-[30px]">
              
            </div>
            <div className="mt-5">
              <h1 className=" font-semibold">Instant Payment Verification</h1>
              <p className="text-xs md:text-sm text-gray-700">
                Every transaction is recorded on the blockchain, providing a
                transparent and verifiable payment trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
