import React from "react";
import SalesByCountry from "../components/SalesByCountry";
import ChartList from "../components/ChartList";
import DataCardList from "../components/DataCardList";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 md:p-6">
      <div className="w-full md:p-4 md:border md:border-gray-200 md:rounded-lg md:shadow-md">
        <SalesByCountry />
      </div>
      <div className="w-full md:p-4 md:border md:border-gray-200 md:rounded-lg md:shadow-md">
        <ChartList />
      </div>
      <div className="w-full md:p-4 md:border md:border-gray-200 md:rounded-lg md:shadow-md">
        <DataCardList />
      </div>
      <div className="w-full md:p-4 md:border md:border-gray-200 md:rounded-lg md:shadow-md">
        <CardList />
      </div>
      <div className="w-full md:p-4 md:border md:border-gray-200 md:rounded-lg md:shadow-md">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
