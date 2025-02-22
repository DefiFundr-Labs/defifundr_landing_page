// import React from 'react'
// import { motion } from "framer-motion"
// import { div } from "framer-motion/client"


const SecurePayments = () => {

  return (
  
    <div className="flex w-11/12 mx-auto gap-5">
            <div>
              <img
                src="/Lock.svg"
                alt="Blockchain Visualization"
                className="relative mt-5 items-center rounded-lg shadow-2xl w-[600px] h-[400px] object-cover transform-gpu group-hover:shadow-cyan-500/50 hover:scale-105 ease-linear duration-200"
                // style={{
                //   clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                // }}
              />
              </div>
              <div className="p-5 w-[555px]">
                <div className="">
                <h1 className="font-[HK Grotesk] font-bold text-[40px] leading-[52.8px] tracking-[-4%]">Enjoy Secure payments with <br/> smart Contract</h1>
                <p className="mt-5 text-gray-700 text-md">Leverage blockchain-powered smart contracts to guarantee salary <br/> payments without intermediaries. Funds are locked and automatically <br/> released, reducing errors and ensuring transparency.</p>
                </div>
                <div className="w-11/12 mx-auto flex mt-10">
                  <div className="w-[262px]">
                    <img src="/save.svg" height={15} width={15} alt="save" className="" />
                    <h1>Tamperproof Payments</h1>
                    <p className="text-gray-700 text-md">Smart contracts execute payments automatically, eliminating the risk of fraud or unauthorized changes.</p>
                  </div>
                  <div className="w-[262px]">
                    <img src="/save.svg" height={10} width={10} alt="save" />
                    <h1>Tamperproof Payments</h1>
                    <p>Every transaction is recorded on the blockchain, providing a transparent and verifiable payment trail.</p>
                  </div>
                  <div>

                  </div>

                </div>
              </div>

</div>
          )
        }

export default SecurePayments
