import React from "react";
import SalesByCountry from "../components/SalesByCountry";
import ChartList from "../components/ChartList";
import DataCardList from "../components/DataCardList";
import CardList from "../components/CardList";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <div className="w-full p-4 border border-gray-200 rounded-lg shadow-md">
        <SalesByCountry />
      </div>
      <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-md">
        <ChartList />
      </div>
      <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-md">
        <DataCardList />
      </div>
      <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-md">
        <CardList />
      </div>
    </div>
  );
};

export default Dashboard;
