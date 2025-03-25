import React, { ReactNode } from "react";

interface IconTextProps {
  img: ReactNode;
  title: string;
  description: string;
}

const IconText: React.FC<IconTextProps> = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4 md:space-y-6 text-balance">
      <div className="border-[0.57px] border-border-primary bg-white rounded-md p-1 flex items-center justify-center size-8">
        {img}
      </div>
      <div>
        <h4 className="text-xl font-bold text-neutralColor-1000">{title}</h4>
        <p className="mt-2.5 text-base leading-[24px] text-neutralColor-1000 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IconText;
