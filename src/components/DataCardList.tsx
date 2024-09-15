import React from 'react';
import DataCard from './DataCard';
import { FaCouch, FaChartBar, FaStore, FaUserPlus } from 'react-icons/fa';

const DataCardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <DataCard
        icon={<FaCouch size={24} color="white" />}
        title="Bookings"
        value={281}
        percentageChange="+55%"
        changeText="than last week"
        isPositiveChange={true}
        bgColor="bg-black"
      />
      <DataCard
        icon={<FaChartBar size={24} color="white" />}
        title="Today's Users"
        value="2,300"
        percentageChange="+3%"
        changeText="than last month"
        isPositiveChange={true}
        bgColor="bg-blue-500"
      />
      <DataCard
        icon={<FaStore size={24} color="white" />}
        title="Revenue"
        value="34k"
        percentageChange="+1%"
        changeText="than yesterday"
        isPositiveChange={true}
        bgColor="bg-green-500"
      />
      <DataCard
        icon={<FaUserPlus size={24} color="white" />}
        title="Followers"
        value="+91"
        percentageChange=""
        changeText="Just updated"
        isPositiveChange={true}
        bgColor="bg-pink-500"
      />
    </div>
  );
};

export default DataCardList;
