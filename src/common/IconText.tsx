import React from 'react';

interface IconTextProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const IconText: React.FC<IconTextProps> = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="flex items-start space-x-2 mb-8 md:mb-0">
      <div>
        <img
          src={imgSrc}
          alt={altText}
          className="mb-4 w-8 h-8 md:w-16 md:h-16 lg:w-16 lg:h-16"
        />
        <h4 className="font-semibold text-gray-900 text-2xl md:text-3xl">
          {title}
        </h4>
        <p className="font-sans font-normal text-lg md:text-2xl mt-4 leading-7 tracking-normal text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IconText;