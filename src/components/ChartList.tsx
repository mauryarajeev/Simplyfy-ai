import React from 'react';
import Card from './ChartCard';

// Dummy data for bar and zig-zag line charts
const barChartData = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Views',
      data: [40, 20, 30, 10, 50, 60, 45],
      backgroundColor: '#60A5FA',
      borderRadius: 5,
    },
  ],
};

const lineChartData = {
  labels: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [150, 300, 250, 350, 400],
      borderColor: '#34D399',
      backgroundColor: 'rgba(52, 211, 153, 0.2)',
      tension: 0, // No curve, creating zig-zag lines
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:flex lg:justify-between lg:space-x-6 mt-8">
      {/* Website Views Card with Bar Chart */}
      <Card
        title="Website Views"
        subtitle="Last Campaign Performance"
        time="campaign sent 2 days ago"
        chartType="bar"
        chartData={barChartData}
      />

      {/* Daily Sales Card with Zig-Zag Line Chart */}
      <Card
        title="Daily Sales"
        subtitle="(+15%) increase in today's sales"
        time="updated 4 min ago"
        chartType="line"
        chartData={lineChartData}
      />

      {/* Completed Tasks Card with Zig-Zag Line Chart */}
      <Card
        title="Completed Tasks"
        subtitle="Last Campaign Performance"
        time="just updated"
        chartType="line"
        chartData={lineChartData}
      />
    </div>
  );
};

export default Dashboard;
