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

const DataCard: React.FC<CardProps> = ({ icon, title, value, percentageChange, changeText, isPositiveChange, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-md ${bgColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <p className="text-4xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
      <p className={`mt-4 text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
        {percentageChange} {changeText}
      </p>
    </div>
  );
};

export default DataCard;
