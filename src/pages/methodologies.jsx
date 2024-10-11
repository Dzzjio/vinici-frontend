import React from 'react';
import iconAi from '../img/ai.png';
import iconTranscription from '../img/transcription.png';
import iconAnalisis from '../img/analisis.png';
import kobaxidze from '../img/kobaxidze.png';
import ocneba from '../img/ocneba.png';
import avatar from '../img/Avatar.png';

export const methodologies = [
  {
    icon: iconAi,
    title: 'ხელოვნური ინტელექტი',
    description: 'მიუკერძოებელ პოლიტიკურ მონაცემებზე გაწვრთნილი ხელოვნური ინტელექტი',
    alt: 'iconAi',
  },
  {
    icon: iconTranscription,
    title: 'ტრანსკრიფცია',
    description: 'ქართულენოვანი ვიდეო/აუდიო ტრანსკრიფცია',
    alt: 'iconTranscription',
  },
  {
    icon: iconAnalisis,
    title: 'ანალიზი',
    description: 'ანალიზი დიდი ენობრივი მოდელების მეშვეობით',
    alt: 'iconAnalisis',
  },
];

export const analysisItemsDesc = [
  {
    title: 'საჯარო ინფორმაციას',
    description: (
      <>
        მონაცემთა შეგროვება ოფიციალური საჯარო წყაროებიდან, მათ შორის{' '}
        <a href="https://www.declaration.ge" target="_blank" rel="noopener noreferrer" className="text-brandColorPrimary underline">
          www.declaration.ge
        </a>
        ,{' '}
        <a href="https://www.napr.gov.ge" target="_blank" rel="noopener noreferrer" className="text-brandColorPrimary underline">
          www.napr.gov.ge
        </a>
        ,{' '}
        <a href="https://www.monitoring.acb.gov.ge" target="_blank" rel="noopener noreferrer" className="text-brandColorPrimary underline">
          www.monitoring.acb.gov.ge
        </a>
        ,{' '}
        <a href="https://www.parliament.ge" target="_blank" rel="noopener noreferrer" className="text-brandColorPrimary underline">
          www.parliament.ge
        </a>
        , 50-მდე მედია საშუალებიდან და სუბიექტების სოციალური მედიის ოფიციალური გვერდებიდან.
      </>
    ),
  },
  {
    title: 'გამონათქვამების ორიგინალებს',
    description:
      'ვაანალიზებთ 50-მდე ონლაინ მედია არხში გამოქვეყნებულ ტექსტურ ციტატებს და გამოსვლების ორიგინალ ვიდეო ვერსიებს პოლიტიკოსების და პარტიების სოციალური მედიის ოფიციალური გვერდებიდან და მედიაარხებიდან.',
  },
];

const Methodologies = () => {
  return (
    <div className="min-h-screen bg-white py-4">

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

      {/* Analysis Section */}
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

          {/* Asterisk Section */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-start">
              <span className="text-4xl lg:text-5xl text-brandColorPrimary font-bold mr-4">*</span>
              <p className="text-sm lg:text-lg">
                ჩვენ პრიორიტეტს ვანიჭებთ სიზუსტეს, გამჭვირვალობას და მიუკერძოებლობას ჩვენი პლატფორმის ყველა ასპექტში.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm lg:text-lg">
                ჩვენი ვალდებულება მონაცემთა ეთიკური დამუშავების მიმართ უზრუნველყოფს კონფიდენციალურობის დაცვას, საჯარო წყაროებს მიღმა არსებული მონაცემების
                ხელშეუხებლობას და ხელმისაწვდომობას ყველა მომხმარებლისთვის.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-12 mt-12 lg:mt-16">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto bg-grayBackground rounded-lg p-6 lg:p-8 flex flex-col items-center text-center shadow-md">
          {/* Image container with three images */}
          <div className="flex space-x-4 mb-4">
            <img src={kobaxidze} alt="Kobaxidze" className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white" />
            <img src={ocneba} alt="Ocneba" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-white" />
            <img src={avatar} alt="Avatar" className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white" />
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

export default Methodologies;
