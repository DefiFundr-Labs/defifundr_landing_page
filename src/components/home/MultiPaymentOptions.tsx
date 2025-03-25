import { moodVariant, sectionVariant } from "../../utils/animations/payments";
import curency_bg from "../../assets/images/currence_bg.webp";
import { CreditCardIcon, SettingsIcon } from "../../assets/svg/general";
import { motion } from "framer-motion";
import IconText from "./IconText";

export const MultiPaymentOptions = () => {
  return (
    <motion.section
      className="flex flex-col-reverse xl:flex-row container   gap-12 md:gap-25 items-center pt-[3rem] py-15 md:py-32"
      variants={sectionVariant}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
    >
      <div className="bg-[#DED0FB] rounded-[20px] border border-[#ECECEC] max-h-[30rem] md:max-w-[32rem]">
        <img src={curency_bg} alt="" className="size-full" />
      </div>
      <motion.div
        className="w-full space-y-6 xl:w-1/2 md:space-y-8"
        variants={moodVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-left h2 inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Pay employees in crypto, stablecoins, or traditional fiat.
          </h2>
          <p className="mt-5 text-base text-left text-neutralColor-1000 md:text-lg inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Give employees the freedom to choose their preferred payment method.
            Pay salaries in USDC, SOL, ETH, fiat, or a mix of both—seamlessly.
          </p>
        </div>
        <div className="flex flex-col items-start w-full gap-6 md:gap-32 md:flex-row">
          <IconText
            img={<CreditCardIcon />}
            title="Multi-Currency Support"
            description="Pay employees in cryptocurrencies like USDC, SOL, ETH, or traditional fiat, all within the same platform."
          />
          <IconText
            img={<SettingsIcon />}
            title="Customizable Payouts"
            description="Split salaries between crypto and fiat, allowing employees to receive payments in their preferred combination."
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
