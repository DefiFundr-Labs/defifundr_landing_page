import { FeatureCardProps } from "../../types/interface";
const WhyChooseUsCard = ({
  title,
  description,
  backgroundImage,
  imageClassName = "",
}: FeatureCardProps) => {
  return (
    <div className="bg-gray-50 rounded-xl relative overflow-hidden min-h-[340px] border border-black/5">
      {/* Icon in top-right */}
      <div className="pt-6 pl-6">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <rect
              x="0.214286"
              y="0.708182"
              width="23.5714"
              height="23.5714"
              rx="7.78571"
              stroke="#D9D9D9"
              stroke-width="0.428571"
            />
            <path
              d="M7.26028 16.1109C7.00922 16.3619 7.00922 16.7689 7.26028 17.02C7.51133 17.271 7.91836 17.271 8.16941 17.02L7.26028 16.1109ZM16.5006 8.42257C16.5006 8.06753 16.2127 7.77971 15.8577 7.77972L10.072 7.77971C9.71695 7.77971 9.42913 8.06753 9.42913 8.42257C9.42913 8.77761 9.71695 9.06543 10.072 9.06543H15.2148V14.2083C15.2148 14.5633 15.5027 14.8511 15.8577 14.8511C16.2127 14.8511 16.5006 14.5633 16.5006 14.2083L16.5006 8.42257ZM8.16941 17.02L16.3123 8.87714L15.4031 7.968L7.26028 16.1109L8.16941 17.02Z"
              fill="black"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="px-6 pt-1 mb-2 text-xl font-semibold">{title}</h3>
        <p className="px-6 text-sm text-gray-600">{description}</p>
      </div>

      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className={`pointer-events-none select-none ${imageClassName}`}
      />
    </div>
  );
};

export default WhyChooseUsCard;
