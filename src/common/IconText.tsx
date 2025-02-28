import React from "react";

interface IconTextProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const IconText: React.FC<IconTextProps> = ({
  imgSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start space-y-4 md:space-y-6">
      <img src={imgSrc} alt={altText} className="w-10 h-10 md:w-16 md:h-16" />
      <div>
        <h4 className="text-xl text-gray-900">{title}</h4>
        <p className="mt-2 text-base leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IconText;
