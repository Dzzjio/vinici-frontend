import React from 'react';

const GrayCard = () => {
  return (
    <div 
      className="bg-gray-200 p-5 w-full h-[300px] relative rounded-t-2xl rounded-bl-2xl transition-all duration-300 ease-in-out"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#0E051E';
        e.currentTarget.style.color = 'white';
        e.currentTarget.querySelector('h3').style.color = 'white';
        e.currentTarget.querySelector('p').style.color = 'white';
        const button = e.currentTarget.querySelector('button');
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
        button.style.border = '2px solid #7960FC';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#e7e7e7';
        e.currentTarget.style.color = 'black';
        e.currentTarget.querySelector('h3').style.color = '#7960FC';
        e.currentTarget.querySelector('p').style.color = 'black';
        const button = e.currentTarget.querySelector('button');
        button.style.backgroundColor = '#7960FC';
        button.style.color = 'white';
        button.style.border = '2px solid transparent';
      }}
    >
      <h3 className="text-2xl font-bold text-[#7960FC]">
        პოლიტიკოსები
      </h3>
      <p className="text-lg text-black">
        აქ იქნება ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე.
      </p>

      <button 
        className="absolute bottom-5 left-5 right-5 px-4 py-2 bg-[#7960FC] text-white border-2 border-transparent cursor-pointer transition-all duration-300 ease-in-out w-[calc(100%-40px)] rounded-t-2xl rounded-bl-2xl"
      >
        See all
      </button>
    </div>
  );
};

export default GrayCard;
