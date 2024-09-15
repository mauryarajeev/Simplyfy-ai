import React from "react";
import Card from "./Card";

const CardList: React.FC = () => {
  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/28233187/pexels-photo-28233187/free-photo-of-vacation-mood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cozy 5 Stars Apartment",
      description:
        'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      price: "$899",
      location: "Barcelona, Spain",
    },
    {
      image:
        "https://images.pexels.com/photos/28348904/pexels-photo-28348904/free-photo-of-a-wave-breaking-at-sunset-with-the-sun-behind-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Office Studio",
      description:
        'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London.',
      price: "$1,119",
      location: "London, UK",
    },
    {
      image:
        "https://images.pexels.com/photos/18460532/pexels-photo-18460532/free-photo-of-roofs-of-medieval-buildings-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beautiful Castle",
      description:
        'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
      price: "$459",
      location: "Milan, Italy",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
            location={card.location}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
