import React, { ReactNode } from "react";

interface IconTextProps {
  img: ReactNode;
  title: string;
  description: string;
}

const IconText: React.FC<IconTextProps> = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4 md:space-y-6">
      <div className="border border-gray-300 rounded-md p-1 flex items-center justify-center w-[30px] h-[30px]">
        {img}
      </div>
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
