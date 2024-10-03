import React from 'react';

const methodologies = [
  {
    number: '01.',
    title: 'მონაცემთა შეგროვება',
    description: `მონაცემთა შეგროვება ოფიცალური საჯარო წყაროებიდან, მათ შორის www.declaration.ge, www.napr.gov.ge, www.monitoring.acb.gov.ge, www.parliament.ge. 50-მდე მედია წყაროდან და სუბიექტების სოციალურ მედიაზე ოფიციალური გვერდებიდან.`,
  },
  {
    number: '02.',
    title: 'მონაცემთა ანალიზი',
    description: `მონაცემთა ანალიზი მოიცავს შეგროვებული მონაცემების სისტემატიზაციას, შესწავლასა და მტკიცებულებებზე დაფუძნებული დასკვნების გაკეთებას.`,
  },
  {
    number: '03.',
    title: 'პრეზენტაცია',
    description: `პრეზენტაციის მომზადება გულისხმობს დაგროვებული და შესწავლილი ინფორმაციის გამჭვირვალე და ეფექტურ წარმოდგენას.`,
  },
  {
    number: '04.',
    title: 'მუდმივი გაუმჯობესება',
    description: `გაუმჯობესების პროცესის უწყვეტი მონიტორინგი და დანერგვა მომსახურების ხარისხის ამაღლების მიზნით.`,
  },
];

const Methodologies = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          {/* Left Section: Heading and Description */}
          <div className="md:w-1/2">
            <p className="text-brandColorPrimary font-semibold mb-2">დამატებითი ინსტრუქციები</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">მეთოდოლოგია</h2>
            <p className="text-gray-500">
              მონაცემთა შეგროვების და დამუშავების პროცესი კომბინირებული და რამდენიმე ეტაბიანი, რომლითაც საჯარო ინფორმაციის წყაროებს ვამოწმებთ.
            </p>
          </div>

          {/* Right Section: Scrollable Single Methodology */}
          <div className="md:w-1/2 mt-8 md:mt-0 max-h-[240px] overflow-y-auto">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white p-6 rounded-lg mb-4 last:mb-0 flex flex-col items-start h-[240px]">
                <div className="text-2xl font-bold mb-4">{methodology.number}</div>
                <h3 className="text-xl font-semibold text-brandColorPrimary mb-2">{methodology.title}</h3>
                <p className="text-gray-500">{methodology.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodologies;
