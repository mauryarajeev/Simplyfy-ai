import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  location,
}) => {
  return (
    <div className="bg-white rounded-lg m-3 shadow-lg overflow-hidden w-full sm:w-80 md:w-96 relative mx-auto">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover" />

      {/* Card Content */}
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-8">{description}</p>

        {/* Separator */}
        <hr className="border-t border-gray-300 mb-3 sm:mb-4" />

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">{price}/night</p>
          <div className="flex items-center text-gray-500">
            <FaMapMarkerAlt className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
