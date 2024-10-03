import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons
import ana from '../../img/ana.png';
import david from '../../img/david.png';
import giorgi from '../../img/giorgi.png';

const teamMembers = [
  {
    name: 'Ana Toklikishvili',
    role: 'Co-Founder & CEO',
    description: 'Operations, Management, Strategic Communications',
    image: ana, // Use actual imported image
    linkedin: 'https://linkedin.com/in/ana-link', // Replace with actual LinkedIn URL
  },
  {
    name: 'Giorgi Toklikishvili',
    role: 'Co-Founder & CTO',
    description: 'Product & Marketing, Start-Up Development',
    image: giorgi, // Use actual imported image
    linkedin: 'https://linkedin.com/in/giorgi-link', // Replace with actual LinkedIn URL
  },
  {
    name: 'David J',
    role: 'Co-Founder & AI Advisor',
    description: 'Natural Language Understanding, Social Media Analysis',
    image: david, // Use actual imported image
    linkedin: 'https://linkedin.com/in/david-link', // Replace with actual LinkedIn URL
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">გუნდი და პარტნიორები</h2>
        <p className="text-gray-500 mt-4">
          აქ იქნება ტექსტი გუნდის და პარტნიორების შესახებ
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-brandColorPrimary font-semibold">{member.role}</p>
            <p className="text-gray-500 mt-2">{member.description}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gray-500 hover:text-brandColorPrimary"
            >
              <FaLinkedin size={24} /> {/* React Icons LinkedIn */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
