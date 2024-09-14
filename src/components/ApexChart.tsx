import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts"; // Importing ApexCharts for updating chart data

// Define the ApexChart component, accepting `cases`, `deaths`, and `recovered` data as props
const ApexChart = ({ cases, deaths, recovered }: { cases: any; deaths: any; recovered: any }) => {
  // Define state for storing the current selection of time range (e.g., one_year, six_months, etc.)
  const [selection, setSelection] = useState("one_year");

  // Initialize the series data for the chart. Each series represents different data (cases, recovered, deaths)
  const [series, setSeries] = useState([
    {
      name: "Cases",
      data: cases,
      fill: {
        colors: ["rgba(255, 196, 83, 0.5)"], // Fill color for the cases line
      },
    },
    {
      name: "Recovered",
      data: recovered,
      fill: {
        colors: ["rgba(68, 227, 119,0.5)"], // Fill color for the recovered line
      },
    },
    {
      name: "Deaths",
      data: deaths,
      fill: {
        colors: ["rgba(241, 77, 77, 0.5)"], // Fill color for the deaths line
      },
    },
  ]);

  // Define the chart options (configuration settings) for ApexCharts
  const [options, setOptions] = useState({
    chart: {
      id: "area-datetime", // ID of the chart, used to update it programmatically
      type: "area" as const, // Setting the chart type to "area"
      height: 350, // Chart height in pixels
      zoom: {
        autoScaleYaxis: true, // Allow zooming on the X-axis while automatically scaling the Y-axis
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30, // Horizontal line annotation at y = 30
          borderColor: "#999",
          label: {
            show: true,
            style: {
              color: "#fff",
              background: "#00E396", // Background color of the label for the y-axis annotation
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date("14 Nov 2012").getTime(), // Vertical line annotation at this date on the x-axis
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            style: {
              color: "#fff",
              background: "#775DD0", // Background color of the label for the x-axis annotation
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false, // Disabling data labels on the chart
    },
    markers: {
      size: 0, // Marker size for the data points (no markers)
      style: "hollow", // Style for markers (if shown)
    },
    xaxis: {
      type: "datetime" as const, // Setting x-axis type to datetime for time-based data
      tickAmount: 6, // Number of ticks shown on the x-axis
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy", // Tooltip format for the x-axis (date)
      },
    },
    fill: {
      type: "gradient", // Setting fill type to gradient
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9, // Gradient opacity from 70% to 90%
        stops: [0, 100], // The gradient will cover the entire area from 0 to 100% of the chart
      },
    },
  });

  // Function to update the chart data based on the selected time range
  const updateData = (timeline: string) => {
    setSelection(timeline); // Update the current selection state

    // Switch case to apply different zoom levels on the chart based on the selected time range
    switch (timeline) {
      case "one_month":
        // Zooming in on the chart to show data from 28 Jan 2013 to 27 Feb 2013
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("28 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "six_months":
        // Zooming in on the chart to show data from 27 Sep 2012 to 27 Feb 2013
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Sep 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "one_year":
        // Zooming in on the chart to show data from 27 Feb 2012 to 27 Feb 2013
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Feb 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "ytd":
        // Zooming in on the chart to show data from the start of 2013 (Year To Date) to 27 Feb 2013
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("01 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "all":
        // Zooming out to show all data from 23 Jan 2012 to 27 Feb 2013
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      default:
        // Do nothing if no matching case
    }
  };

  return (
    <div id="chart">
      {/* Toolbar with buttons to select different time ranges for the chart */}
      <div className="toolbar">
        <button
          id="one_month"
          onClick={() => updateData("one_month")} // Updates the chart for one-month data
          className={selection === "one_month" ? "active" : ""}
        >
          1M
        </button>
        &nbsp;
        <button
          id="six_months"
          onClick={() => updateData("six_months")} // Updates the chart for six-months data
          className={selection === "six_months" ? "active" : ""}
        >
          6M
        </button>
        &nbsp;
        <button
          id="one_year"
          onClick={() => updateData("one_year")} // Updates the chart for one-year data
          className={selection === "one_year" ? "active" : ""}
        >
          1Y
        </button>
        &nbsp;
        <button
          id="ytd"
          onClick={() => updateData("ytd")} // Updates the chart for year-to-date data
          className={selection === "ytd" ? "active" : ""}
        >
          YTD
        </button>
        &nbsp;
        <button
          id="all"
          onClick={() => updateData("all")} // Updates the chart to show all available data
          className={selection === "all" ? "active" : ""}
        >
          ALL
        </button>
      </div>

      {/* Render the ApexCharts component */}
      <div id="chart-timeline">
        <ReactApexChart options={options} series={series} type="area" height={500} />
      </div>
    </div>
  );
};

export default ApexChart;
