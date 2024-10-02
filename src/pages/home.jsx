import React from 'react';
import heroBg from '../img/vinvar.jpeg'

const HomePage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <header className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-black bg-opacity-50 rounded-2xl p-10 shadow-lg">
        {/* Left Column - Heading and Button */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Bringing higher voter turnout in elections
          </h1>
          <button
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
            onClick={() => alert('Get Started Clicked!')}
          >
            გაიგე მეტი {/* Button in Georgian */}
          </button>
        </div>

        {/* Right Column - Supporting Text */}
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl leading-relaxed text-white">
            By empowering citizens to make informed voting decisions, VINICI is AI-powered, fact-based profiles of politicians and parties.
            We provide easily digestible profiles showcasing backgrounds, finances, stances on key issues, and more. Consider us a one-stop
            directory for political candidate transparency.
          </p>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
