import React from 'react';

const GrayCard = () => {
  return (
    <div 
      className="bg-gray-200 p-5 w-full h-[300px] relative rounded-t-2xl rounded-bl-2xl transition-all duration-300 ease-in-out group hover:bg-[#0E051E] hover:text-white"
    >
      <h3 className="text-2xl font-bold text-[#7960FC] transition-colors duration-300 ease-in-out group-hover:text-white">
        პოლიტიკოსები
      </h3>
      <p className="text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        აქ იქნება ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე.
      </p>

      <button 
        className="absolute bottom-5 left-5 right-5 px-4 py-2 bg-[#7960FC] text-white border-2 border-transparent cursor-pointer transition-all duration-300 ease-in-out group-hover:bg-transparent group-hover:border-[#7960FC] group-hover:text-white w-[calc(100%-40px)] rounded-t-2xl rounded-bl-2xl"
      >
        See all
      </button>
    </div>
  );
};

export default GrayCard;
