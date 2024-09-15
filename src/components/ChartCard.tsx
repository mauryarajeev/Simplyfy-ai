import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart.js components you want to use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CardProps {
  title: string;
  subtitle: string;
  time: string;
  chartType: 'bar' | 'line';
  chartData: any;
}

const ChartCard: React.FC<CardProps> = ({ title, subtitle, time, chartType, chartData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-5 w-1/3.1">  
      {/* Chart Section */}
      <div className="h-48 mb-4">  
        {chartType === 'bar' ? (
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        ) : (
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        )}
      </div>

      {/* Card Content */}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <div className="flex items-center text-gray-400 text-xs mt-2">
          <i className="far fa-clock mr-1"></i>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
