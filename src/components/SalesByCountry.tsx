import React from 'react';
import WorldImage from "../assets/mapImage.png";

interface CountryData {
  country: string;
  flag: string;
  sales: number;
  value: string;
  bounce: string;
}

const data: CountryData[] = [
  {
    country: 'United States',
    flag: '🇺🇸',
    sales: 2500,
    value: '$230,900',
    bounce: '29.9%',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    sales: 3900,
    value: '$440,000',
    bounce: '40.22%',
  },
  {
    country: 'Great Britain',
    flag: '🇬🇧',
    sales: 1400,
    value: '$190,700',
    bounce: '23.44%',
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    sales: 562,
    value: '$143,960',
    bounce: '32.14%',
  },
];

const SalesByCountry: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <div className="p-3 bg-green-500 text-white rounded-full">
          🌐 {/* World icon */}
        </div>
        <h2 className="text-xl font-bold ml-4">Sales by Country</h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sales Data Section */}
        <div className="w-full overflow-x-auto">
          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-5 items-center border-b border-gray-400 py-2 font-bold">
            <div className="text-center">Flag</div>
            <div className="text-left">Country</div>
            <div className="text-right">Sales</div>
            <div className="text-right">Value</div>
            <div className="text-right">Bounce</div>
          </div>

          {/* Sales Data */}
          <div className="w-full border-t border-gray-300">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 sm:grid-cols-5 items-center border-b border-gray-300 py-4"
              >
                {/* Flag */}
                <div className="text-center text-2xl">{item.flag}</div>

                {/* Country */}
                <div className="text-left font-bold">{item.country}</div>

                {/* Sales */}
                <div className="hidden sm:block text-right">{item.sales}</div>

                {/* Value */}
                <div className="hidden sm:block text-right font-bold">{item.value}</div>

                {/* Bounce */}
                <div className="hidden sm:block text-right">{item.bounce}</div>
              </div>
            ))}
          </div>
        </div>

        {/* World Map Section */}
        <div className="flex justify-center items-center">
          <img src={WorldImage} alt="World Map" className="w-full h-auto max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default SalesByCountry;
