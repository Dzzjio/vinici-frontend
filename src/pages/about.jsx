import React from 'react';
import aboutBg from '../img/about-bg.jpeg';
import { methodologies, analysisItemsDesc } from './methodologies.jsx'

const About = () => {
  // Array of objects for grid content
  const analysisItems = [
    { id: 1, text: 'მოკლე ბიოგრაფია' },
    { id: 2, text: 'ფინანსური მდგომარეობა' },
    { id: 3, text: 'რიტორიკა დროის ხაზში' },
    { id: 4, text: 'სენტიმენტის ანალიზი' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
      </div>

      {/* Main Content Section */}
      <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="border-b-[1px] border-black lg:border-b-0 lg:border-r-[1px] pr-0 lg:pr-8 pb-8 lg:pb-0">
            <h5 className="text-brandColorPrimary text-lg lg:text-xl font-semibold mb-4">
              რა არის ვინიცი
            </h5>
            <h2 className="text-3xl leading-[1.5] lg:text-6xl lg:leading-[1.2] font-bold">
              ვინ ვართ და რას გთავაზობთ
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mt-6 lg:mt-0">
              VINICI (ვინ იცი) პოლიტიკოსებისა და პარტიების პროფესიული პლატფორმა,
              ასევე შერჩული მენტორის მაცადე. ვინ თუ არა იცი, ან თუ იცი, გაიცნო.
              ხელოვნური ინტელექტის დახმარებით, გამჭვირვალობა, არჩევანი და გადაწყვეტილებები
              ეფუძნება დახვეწილი მონაცემების და პოლიტიკის თვალსაზრისით დასკვნებს.
            </p>
          </div>
        </div>
      </div>

      {/* New Section - Information Analysis */}
      <div className="bg-grayBackground py-12">
        <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            ფაქტებზე დაფუძნებული ინფორმაცია
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-12">
            პოლიტიკოსებისა და პარტიების პროგრამების ანალიზი
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Map over the analysisItems array */}
            {analysisItems.map(item => (
              <div
                key={item.id}
                className="bg-brandColorLight py-6 px-4 rounded-lg text-brandColorPrimary font-semibold text-xl lg:text-2xl"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodologies Section */}
      <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto text-center py-8 bg-white">
        <h3 className="text-lg font-semibold text-brandColorPrimary mb-4">დამხმარე ხელსაწყოები</h3>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">მეთოდოლოგია</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {methodologies.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <img src={item.icon} alt={item.alt} className="w-20 h-20 "/>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm lg:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 bg-grayBackground mt-12 lg:mt-16">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">რას ვაანალიზებთ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisItemsDesc.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl lg:text-5xl font-semibold text-brandColorPrimary mb-12">{item.title}</h3>
                <p className="text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
          </div>
          </div>

    </div>
  );
};

export default About;
