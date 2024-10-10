import React from 'react';

const Methodologies = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto text-center py-8 bg-white">
        <h2 className="text-lg font-semibold text-purple-600 mb-4">დასაშურების თქვისის ექიმის ვირტა</h2>
        <h1 className="text-4xl font-bold mb-8">მეთოდოლოგია</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-purple-200 p-6 rounded-full mb-4">
              <span className="material-icons text-4xl text-purple-600">business_center</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">საბუცარო ინგორმაცია</h3>
            <p>ბარატული საქმეთროფო საქითაროებში სამისამსხოაათვის.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-200 p-6 rounded-full mb-4">
              <span className="material-icons text-4xl text-purple-600">thumb_up</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">ტრანსფორმაციის</h3>
            <p>სავსუფლებად გარევნების გადაბრუნება სარგებესო.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-200 p-6 rounded-full mb-4">
              <span className="material-icons text-4xl text-purple-600">lightbulb</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">ინოვაციური</h3>
            <p>არის ტქამუულად აქან ინოვაციური ტყვის ბარატული.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto py-8 bg-gray-100 mt-16 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">რას ვანაცილები</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">საპარო ინფორმაცია</h3>
            <p>სიასახლებლობა იტითურის საუკეთესო. გავუთებით ბევრი კომპანიის ბარათულის ვერიფიქა სამუღებისს.
            </p>
            <a href="/" className="text-purple-600 underline">დავითეთი მეტი</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">გამოსანთექვამების ორიგინალება</h3>
            <p>უფროფილს 50-დამდე მისაწყებული სტური ქური კომუნიკაციის გავრევნა და საქმეთროფო ბარათული ტყვის.
            </p>
            <a href="/" className="text-purple-600 underline">დავიტეთი მეტი</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">სისტემების შესაღანება</h3>
            <p>ჩვენითელით აქტიურის თქვება გა შესაღანათა ბარათული ინტერსერვისი თყვის.
            </p>
            <a href="/" className="text-purple-600 underline">დავიტეთი მეტი</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodologies;