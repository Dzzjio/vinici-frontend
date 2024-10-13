import React from 'react';
import aboutBg from '../img/about-bg.jpeg';
import { methodologies, analysisItemsDesc } from './methodologies.jsx';
import Team from './home/team.jsx';
import kobaxidze from '../img/kobaxidze.png';
import ocneba from '../img/ocneba.png';
import avatar from '../img/Avatar.png';


const About = () => {
  // Array of objects for grid content (new section)
  const analysisSections = [
    {
      id: 1,
      title: 'სენტიმენტური ანალიზი',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      id: 2,
      title: 'დისკურსის ანალიზი',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      id: 3,
      title: 'პროფილის აგება',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
  ];

  // Array of objects for the first grid content
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
      ></div>

      {/* Main Content Section */}
      <div className="max-w-container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full border-b-[1px] border-black lg:border-b-0 lg:border-r-[1px] pr-0 lg:pr-8 pb-8 lg:pb-0">
            <h5 className="text-brandColorPrimary text-lg lg:text-xl font-semibold mb-4">რა არის ვინიცი</h5>
            <h2 className="text-3xl leading-[1.5] lg:text-6xl lg:leading-[1.2] font-bold">
              ვინ ვართ და რას გთავაზობთ
            </h2>
          </div>

          <div className="flex items-center w-full">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mt-6 lg:mt-0">
              VINICI (ვინ იცი) პოლიტიკოსებისა და პარტიების პროფესიული პლატფორმა, ასევე შერჩული მენტორის მაცადე.
              ვინ თუ არა იცი, ან თუ იცი, გაიცნო. ხელოვნური ინტელექტის დახმარებით, გამჭვირვალობა, არჩევანი და
              გადაწყვეტილებები ეფუძნება დახვეწილი მონაცემების და პოლიტიკის თვალსაზრისით დასკვნებს.
            </p>
          </div>
        </div>
      </div>

      {/* New Section - Information Analysis */}
      <div className="bg-grayBackground py-12 w-full">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">ფაქტებზე დაფუძნებული ინფორმაცია</h2>
          <p className="text-base lg:text-lg text-gray-600 mb-12">პოლიტიკოსებისა და პარტიების პროგრამების ანალიზი</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Map over the analysisItems array */}
            {analysisItems.map((item) => (
              <div
                key={item.id}
                className="bg-brandColorLight py-6 px-4 rounded-lg text-brandColorPrimary font-semibold text-xl lg:text-2xl w-full"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodologies Section */}
      <div className="bg-white py-8 w-full">
        <div className="max-w-container mx-auto mx-auto text-center">
          <h3 className="text-lg font-semibold text-brandColorPrimary mb-4">დამხმარე ხელსაწყოები</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">მეთოდოლოგია</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {methodologies.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 items-center">
                <img src={item.icon} alt={item.alt} className="w-20 h-20" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-grayBackground py-8 mt-12 lg:mt-16 w-full">
        <div className="max-w-container mx-auto mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">რას ვაანალიზებთ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {analysisItemsDesc.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-3xl lg:text-5xl font-semibold text-brandColorPrimary mb-12">{item.title}</h3>
                <p className="text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Team />

      <div className="py-12 w-full">
        <div className="max-w-container mx-auto mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            შემოგვიერთეთ ანალიტიკა თქვენი სასურველი მხარისთვის
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            პროაქტიული ანალიზი, დისკურსის ანალიზი და სენტიმენტის ანალიზი
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Map over the analysisSections array */}
            {analysisSections.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-brandColorPrimary text-3xl lg:text-4xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 bg-brandColorPrimary text-white text-lg lg:text-xl font-semibold py-3 px-8 rounded-full">
            {/* put correct link in href */}
            <a href="softr contact page link">დაგვიკავშირდით</a>
          </button>
        </div>
      </div>

      <div className="py-12 mt-12 lg:mt-16">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto bg-grayBackground rounded-lg p-6 lg:p-8 flex flex-col items-center text-center shadow-md">
        <div className="relative mb-4 h-20 lg:h-24 flex justify-center items-center">
          <img
            src={kobaxidze}
            alt="Kobaxidze"
            className="absolute w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white left-[-40px]"
          />
          <img
            src={ocneba}
            alt="Ocneba"
            className="relative z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white"
          />
          <img
            src={avatar}
            alt="Avatar"
            className="absolute w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white right-[-40px]"
          />
        </div>

          <h2 className="text-lg lg:text-xl font-semibold mb-2">გაქვთ დამატებითი კითხვები?</h2>
          <p className="text-sm lg:text-base text-gray-600 mb-4">Can't find the answer you're looking for? Please contact us.</p>
          <button className="bg-brandColorPrimary text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-brandColorPrimary-dark">
            <a href="www.vinici.ge/contact">გაგვიზიარეთ შეკითხვა</a>
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;
