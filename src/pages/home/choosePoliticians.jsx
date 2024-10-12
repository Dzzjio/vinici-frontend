import React from 'react';
import GrayCard from '../../components/grayCard';

const ChoosePoliticians = () => {
  // Data for each GrayCard
  const cardsData = [
    {
      title: 'პოლიტიკოსები',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 1.',
      buttonText: 'იხილე ყველა'
    },
    {
      title: 'პარტიები და გაერთიანებები',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 2.',
      buttonText: 'იხილე ყველა'
    },
    {
      title: 'შეადარე პოლიტიკოსები ან პარტიები',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 3.',
      buttonText: 'იხილე ყველა'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <GrayCard key={index} title={card.title} description={card.description} buttonText={card.buttonText} />
      ))}
    </div>
  );
};

export default ChoosePoliticians;
