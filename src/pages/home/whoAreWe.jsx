import React from 'react';
import viniciCover from '../../img/vinici-cover.png';
import march from '../../img/march.png';

const WhoAreWe = () => {
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
              <h1 className="text-4xl font-bold">Logo</h1>
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

      </div>
    </section>
  );
};

export default WhoAreWe;
