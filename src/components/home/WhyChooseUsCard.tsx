import { FeatureCardProps } from "../../types/interface";
import { ArrowUpRightIcon } from "../../assets/svg/general";
const WhyChooseUsCard = ({
  title,
  description,
  backgroundImage,
  imageClassName = "",
}: FeatureCardProps) => {
  return (
    <div className=" backdrop:blur rounded-xl  bg-[#00000005] overflow-hidden h-[18.125rem]  w-full md:max-w-[20.8rem] border border-[#00000008]  flex flex-col justify-between gap-y-7">
      <div className="px-4 pt-4 space-y-2.5">
        <div className="size-6 rounded-lg border-[0.43px] p-[7.71px] flex items-center justify-center border-[#D9D9D9] opacity-80">
          {/* Icon in top-right */}
          <ArrowUpRightIcon />
        </div>

        {/* Content */}
        <div className="space-y-3.5">
          <h3 className="text-[1.0625rem] leading-[180%] font-bold ">
            {title}
          </h3>
          <p className="text-sm leading-[140%] font-medium text-[#4D4D53]">
            {description}
          </p>
        </div>
      </div>

      <div className={`${imageClassName}`}>
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt=""
          className={`pointer-events-none select-none `}
        />
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
