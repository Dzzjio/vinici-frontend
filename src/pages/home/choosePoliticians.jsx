import React from 'react';
import GrayCard from '../../components/grayCard';

const ChoosePoliticians = () => {
  // Data for each GrayCard
  const cardsData = [
    {
      title: 'პოლიტიკოსები 1',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 1.',
      buttonText: 'See all 1'
    },
    {
      title: 'პოლიტიკოსები 2',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 2.',
      buttonText: 'See all 2'
    },
    {
      title: 'პოლიტიკოსები 3',
      description: 'ტექსტი პოლიტიკოსების, პოლიტიკური პარტიების და მათი შედარების ხერხებზე 3.',
      buttonText: 'See all 3'
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
