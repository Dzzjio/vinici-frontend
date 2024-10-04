import React, { useRef } from 'react';
import viniciCover from '../../img/vinici-cover.png';
import march from '../../img/march.png';
import logo from '../../img/logo.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const WhoAreWe = () => {
  const timelineRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      timelineRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const timelineData = [
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
    {
      date: 'March, 2023',
      description: 'Co-Founder Ana witnesses the March 2023 protests in Georgia...'
    },
    {
      date: 'November, 2024',
      description: 'VINICI wins Democracy Tech Hackathon 2024...'
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB] relative">
      <div className="relative" style={{ height: '450vh' }}>
        
        {/* Image Section */}
        <div className="sticky top-0 w-full h-[100vh] z-10">
          <img
            src={viniciCover}
            alt="Vinici Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading Section */}
        <div className="sticky top-0 w-full h-[20vh] bg-brandColorPrimary text-white text-[4vw] font-bold flex justify-center items-center z-20">
          ვინ ვართ და რას გთავაზობთ
        </div>

        {/* First Card Section with Extra Layer */}
        <div className="sticky top-0 w-full h-[100vh] bg-brandColorSecondary z-30 flex justify-center items-center">
          <div className="w-[90%] h-[calc(100%-80px)] mt-[80px] bg-white rounded-t-2xl shadow-lg flex">
            {/* Left (Gray) Column */}
            <div className="w-1/2 bg-gray-300 flex justify-center items-center rounded-tl-2xl">
              <img src={logo} alt="logo" />
            </div>
            {/* Right (White) Column */}
            <div className="w-1/2 bg-white flex justify-center items-center rounded-tr-2xl p-20">
              <p className="text-gray-700 text-2xl">
                VINICI (ᲕᲘᲜ ᲘᲪᲘ) პოლიტიკოსებისა და პარტიების პროფილების პლატფორმაა, რომელიც ხელოვნური ინტელექტის დახმარებით იქმნება...
              </p>
            </div>
          </div>
        </div>

        {/* Second Card Section with Text and Image */}
        <div className="sticky top-0 w-full h-[100vh] bg-brandColorSecondary z-30 flex justify-center items-center">
          <div className="w-[90%] h-[calc(100%-80px)] mt-[80px] bg-white rounded-t-2xl shadow-lg flex">
            {/* Left (Text) Column */}
            <div className="w-1/2 bg-brandColorPrimary flex justify-center items-center rounded-tl-2xl p-20">
              <h2 className="text-gray-700 text-4xl font-bold">
              The story of how we got started on VINICI
              </h2>
            </div>
            {/* Right (Image) Column */}
            <div className="w-1/2 bg-gray-300 flex justify-center items-center rounded-tr-2xl">
              <img src={march} alt="March" className="w-full h-full object-cover rounded-tr-2xl" />
            </div>
          </div>
        </div>

        <div className="sticky top-0 w-full h-[100vh] bg-brandColorSecondary z-30 flex justify-center items-center">
          <div className="w-[90%] h-[calc(100%-80px)] mt-[80px] rounded-t-2xl shadow-lg p-10">
            <h5 className="text-brandColorPrimary text-lg font-semibold mb-4">
              Additional Information
            </h5>
            <h2 className="text-4xl font-bold text-white mb-6">
              ორგანიზაციის ისტორია
            </h2>
            <div className="mb-8 flex justify-between items-start">
              <p className="text-lg text-white">
                მონაცემთა  შეგროვებისა და დამუშავების პროცესი კომპლექსური და რამდენიმე ეტაპიანია, რომელიც საჯარო ინფორმაციის წყაროებს ეყრდნობა.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => scrollTimeline('left')} className="border border-gray-300 text-gray-900 px-4 py-2 rounded-lg flex items-center">
                  <FaArrowLeft className="mr-2" /> 
                </button>
                <button onClick={() => scrollTimeline('right')} className="border border-gray-300 text-gray-900 px-4 py-2 rounded-lg flex items-center">
                  <FaArrowRight className="mr-2" />
                </button>
              </div>
            </div>

            <div ref={timelineRef} className="flex space-x-6 overflow-x-auto">
              {timelineData.map((item, index) => (
                <div key={index} className="w-[300px] bg-gray-100 p-6 rounded-lg shadow-md flex-shrink-0">
                  <h3 className="text-brandColorPrimary font-bold text-lg mb-2">{item.date}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
