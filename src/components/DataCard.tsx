import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  percentageChange: string;
  changeText: string;
  isPositiveChange: boolean;
  bgColor: string;
}

const DataCard: React.FC<CardProps> = ({
  icon,
  title,
  value,
  percentageChange,
  changeText,
  isPositiveChange,
  bgColor
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
      {/* Icon and Value Section */}
      <div className="flex items-center space-x-4">
        {/* Icon with dynamic background */}
        <div className={`p-3 rounded-md ${bgColor}`}>
          {icon}
        </div>
        
        {/* Title and Value */}
        <div>
          <h3 className="text-gray-500 text-sm sm:text-base">{title}</h3>
          <p className="text-3xl sm:text-4xl font-bold text-gray-800">{value}</p>
        </div>
      </div>

      {/* Percentage change text */}
      <p className={`mt-4 text-xs sm:text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
        {percentageChange} {changeText}
      </p>
    </div>
  );
};

export default DataCard;
