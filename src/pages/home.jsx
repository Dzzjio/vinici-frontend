import GrayCard from '../components/grayCard';
import heroBg from '../img/vinvar.jpeg';

const HomePage = () => {
  return (
    <>
         <section
      className="relative bg-cover min-h-[100vh] bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white space-y-8 md:space-y-0 md:space-x-10">
        
        {/* Left Section with Heading and Button */}
        <div className="flex flex-col items-start max-w-lg space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Bringing higher voter turnout in elections
          </h2>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
            გაიგე მეტი
          </button>
        </div>
        
        {/* Right Section with Subheading and Text */}
        <div className="flex flex-col items-start max-w-lg space-y-4">
          <h4 className="text-2xl font-semibold">
            By empowering citizens to make informed voting decisions
          </h4>
          <p className="text-lg">
            VINICI is AI-powered, fact-based profiles of politicians and parties. We provide easily digestible profiles showcasing backgrounds, finances, stances on key issues, and more. Consider us a one-stop directory for political candidate transparency. VINICI (ᲕᲘᲜᲘᲪᲘ) means "Who do you know" in Georgian.
          </p>
        </div>
      </div>
    </section>
    <div>
    <GrayCard />
    <GrayCard />
    <GrayCard />
    <GrayCard />
    </div>
    </>
  );
};

export default HomePage;
