import heroBg from '../../img/vinvar.jpeg';
import ChoosePoliticians from './choosePoliticians';
import Methodologies from './methodologies';
import MethodologiesFullView from './methodologiesFullView';
import Services from './services';
import Team from './team';
import WhoAreWe from './whoAreWe';

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
    <section className='container mx-auto'>
      <div className="flex justify-between items-center py-6">
        <div>
          <h3 className="text-5xl font-bold text-gray-900">
            გაიცანი პოლიტიკოსი და გააკეთე არჩევანი
          </h3>
          <p className="text-gray-500 text-xl mt-4">
            აქ იქნება ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე.
          </p>
        </div>
        <span className="text-brandColorPrimary text-6xl font-bold">*</span> {/* Add your custom color */}
      </div>
      <ChoosePoliticians />
    </section>
    <section>
      <WhoAreWe />
    </section>
    <section>
      <Team />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Methodologies />
    </section>
    <section>
      <MethodologiesFullView />
    </section>
    <h1>this was all for nothing </h1>
    </>
  );
};

export default HomePage;
