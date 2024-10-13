import React from 'react';

const GrayCard = ({ title, description, buttonText }) => {
  return (
    <div 
      className="bg-grayBackground p-5 w-full h-[350px] md:h-[400px] relative rounded-2xl transition-all duration-300 ease-in-out group hover:bg-brandColorSecondary hover:text-white"
    >
      <h3 className="text-2xl lg:text-3xl font-bold text-[#7960FC] transition-colors duration-300 ease-in-out group-hover:text-white">
        {title}
      </h3>
      <p className="text-base md:text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        {description}
      </p>

      <button 
        className="absolute bottom-5 left-5 right-5 px-4 py-2 bg-[#7960FC] text-white border-2 border-transparent cursor-pointer transition-all duration-300 ease-in-out group-hover:bg-transparent group-hover:border-[#7960FC] group-hover:text-[#7960FC] w-[calc(100%-40px)] rounded-full"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GrayCard;
