import React from 'react';
import heroBg from '../img/vinvar.jpeg';

const Election = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay for hero image */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/3">
        <h5>ანალიზი</h5>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            არჩვენები 2024: მოლმოდინეობა და აწმყობი
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            აქ იხილავთ პუბლიკაციის დეტალებს და მთავარი შედარების სურათებზე.
          </p>

          {/* Information */}
          <div className="flex items-center space-x-2 mb-4">
            <button className="p-2 bg-gray-200 rounded-full">🔍</button>
            <button className="p-2 bg-gray-200 rounded-full">📄</button>
            <button className="p-2 bg-gray-200 rounded-full">🔗</button>
          </div>

          {/* Back to list link */}
          <a href="/" className="text-brandColorPrimary text-sm underline">
            უკან დაბრუნება სიაში
          </a>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3">
          <p className="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. 
            Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc ac ut, feugiat 
            consequat purus. Non massa enim vitae dui mattis. Vel in ultricies vel fringilla.
          </p>

          <h3 className="text-xl font-semibold mb-2">Introduction</h3>
          <p className="text-gray-700 text-base mb-4">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. 
            Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus 
            tincidunt. At feugiat sapien varius rid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Election;
