import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi'; // React icon for the arrow

const services = [
  {
    title: 'სემანტიკური ანალიზი',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Rhetoric analyzes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Customized analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white max-w-container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">თქვენზე მორგებული სერვისები</h2>
        <p className="text-gray-500 mt-4">Here goes text about services</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-brandColorSecondary text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-gray-200 mb-4">{service.description}</p>

            {/* Arrow icon */}
            <FiArrowUpRight className="absolute top-4 right-4 text-xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
