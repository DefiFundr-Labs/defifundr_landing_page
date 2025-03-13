import {
  moodVariant,
  oscillateVariant,
  rotateVariant,
  sectionVariant,
  textVariant,
} from "../animations/payments";
import { CreditCardIcon, SettingsIcon, WavyLines } from "./icons/payments";
import { motion } from "framer-motion";

export const MultiPaymentOptions = () => {
  return (
    <motion.section
      className="flex flex-col-reverse lg:flex-row container   gap-[2.5rem] lg:gap-[5rem] items-center pt-[3rem] pb-[3rem] lg:pt-[5rem] lg:pb-[5rem]"
      variants={sectionVariant}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full h-full rounded-[1.5rem] lg:w-1/2 flex-justify-center bg-[#DED0FB] flex flex-col pt-[0.5rem] pb-[0.5rem] overflow-hidden"
        variants={moodVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <div className="relative w-full">
          <WavyLines />
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-5 left-4 lg:bottom-0"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdt.svg" alt="usdt" className="scale-70" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-15 lg:bottom-0 lg:top-8 left-15 lg:left-28"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usd.svg" alt="usd" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-[10px] lg:bottom-[-10px] left-[40%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer top-8 left-[54%] lg:left-[50%]"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/euro.svg" alt="euro" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer  top-0 right-[15%] lg:right-[18%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-0 right-0 lg:right-0"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </motion.div>
        </div>
        <div className="relative w-full">
          <WavyLines classStyles="translate-x-6" />
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer left-4 bottom-5 lg:bottom-0"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/busd.svg" alt="busd" className="scale-70" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-10 lg:bottom-0 lg:top-8 left-15 lg:left-[20%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdt.svg" alt="usdt" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-[10px] lg:bottom-[-10px] left-[40%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer top-8 left-[50%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdt.svg" alt="usdt" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer top-0 right-[15%] lg:right-[18%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-0 right-0 lg:right-0"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </motion.div>
        </div>
        <div className="relative w-full">
          <WavyLines />
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]  rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer left-4 bottom-5 lg:bottom-0"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdt.svg" alt="usdt" className="scale-70" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-15 lg:bottom-0 lg:top-8 left-15 lg:left-28"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usd.svg" alt="usd" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-[10px] lg:bottom-[-10px] left-[40%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/eth.svg" alt="eth" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer top-8 left-[54%] lg:left-[50%]"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/euro.svg" alt="euro" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer top-0 right-[15%] lg:right-[18%]"
            variants={oscillateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/busd.svg" alt="busd" className="" />
          </motion.div>
          <motion.div
            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[2.675rem] 
    border-[0.06rem] border-white/50 border-t-[#C0A9F0] 
    bg-white backdrop-blur-md p-1 gap-[0.4rem] flex justify-center items-center absolute cursor-pointer bottom-0 right-0 lg:right-0"
            variants={rotateVariant}
            animate="animate"
            whileHover="hover"
          >
            <img src="/img/usdc.svg" alt="usdc" className="" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2"
        variants={moodVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[45.8px] tracking-[-4%] text-left"
          initial="initial"
          whileInView="final"
          variants={textVariant}
          viewport={{ once: true }}
        >
          Pay employees in crypto, <br className="hidden lg:block" />{" "}
          stablecoins, or traditional fiat.
        </motion.h2>
        <motion.p
          className="mt-5 text-[#2D2F31] text-sm md:text-md text-left"
          initial="initial"
          whileInView="final2"
          variants={textVariant}
          viewport={{ once: true }}
        >
          Give employees the freedom to choose their preferred payment method.
          Pay salaries in USDC, SOL, ETH, fiat, or a mix of both—seamlessly.
        </motion.p>
        <div className="flex flex-col items-start w-full gap-5 mt-10 md:flex-row">
          <div className="items-start w-full p-2 md:w-1/2">
            <div className="pl-[0.5rem] lg:pl-[0rem]">
              <CreditCardIcon />
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-bold">Multi-Currency Support</h2>
              <p className="text-[#2D2F31] text-xs md:text-sm">
                Pay employees in cryptocurrencies like USDC, SOL, ETH, or
                traditional fiat, all within the same platform.
              </p>
            </div>
          </div>
          <div className="items-start w-full p-2 md:w-1/2">
            <div className="pl-[0.5rem] lg:pl-[0rem]">
              <SettingsIcon />
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-bold">Customizable Payouts</h2>
              <p className="text-xs md:text-sm text-[#2D2F31]">
                Split salaries between crypto and fiat, allowing employees to
                receive payments in their preferred combination.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
