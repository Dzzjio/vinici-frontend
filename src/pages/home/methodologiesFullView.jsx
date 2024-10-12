import React from 'react';

const MethodologiesFullView = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2">
          <div className="flex items-center mb-6">
            {/* Placeholder for the purple asterisk */}
            <span className="text-6xl text-brandColorPrimary font-bold">*</span>
          </div>
          <p className="text-gray-900 text-xl font-medium">
            ჩვენ პროექტებს ვანიჭებთ სიზუსტეს, გამჭვირვალობას და მიუკერძოებლობას ჩვენს პლატფორმის ყველა ასპექტში.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <p className="text-gray-500 mb-6">
            ჩვენ ვალდებულნი ვართ ყველა ეთიკურ დადუღებას მიჰყვეთ
            ერენების დასაფუძვებელ პროექტებთან დაკავშირებით. სუფთა 
            წაროროს მოკლების ფუნქციების გამოყენებით 
            ხარისხიან შედეგებს მივაღწევთ.
          </p>
          <button className="bg-brandColorSecondary text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            ნახე მეტი დეტალები და სერვისები
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodologiesFullView;
