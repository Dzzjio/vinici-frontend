import React from 'react';

// Data for partner logos and descriptions
const partnersData = [
  {
    logo: '/path/to/logo1.png',
    name: 'Open Evidence',
    description: 'Data Collection/Media Monitoring',
    linkedin: 'https://www.linkedin.com/company/open-evidence/'
  },
  {
    logo: '/path/to/logo2.png',
    name: 'Enagram',
    description: 'Speech to Text, Machine Learning, Data Analysis',
    linkedin: 'https://www.linkedin.com/company/enagram/'
  },
  {
    logo: '/path/to/logo3.png',
    name: 'ForSet',
    description: 'Georgian Large Language Model Service',
    linkedin: 'https://www.linkedin.com/company/forset/'
  },
  {
    logo: '/path/to/logo4.png',
    name: 'DataFest Tbilisi',
    description: 'Georgian Large Language Model Service',
    linkedin: 'https://www.linkedin.com/company/datafest-tbilisi/'
  },
  {
    logo: '/path/to/logo5.png',
    name: 'Alliance of Democracies',
    description: 'Georgian Large Language Model Service',
    linkedin: 'https://www.linkedin.com/company/alliance-of-democracies/'
  }
];

const Partners = () => {
  return (
    <div className="text-center py-12 max-w-container mx-auto bg">
      <h2 className="text-3xl font-bold mb-4">ვინ გვაძლევს მხარდაჭერას</h2>
      <p className="text-lg mb-8">
        We're lucky to be supported by some of the best investors in the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partnersData.map((partner, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
            <img src={partner.logo} alt={partner.name} className="h-20 mb-4" />
            <h3 className="text-xl font-semibold">{partner.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{partner.description}</p>
            {partner.linkedin && (
              <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
