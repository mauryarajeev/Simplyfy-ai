// Import necessary files and libraries
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";  // Note: This hook is imported but not used in the current code
import ApexChart from "../components/ApexChart";
import LeafletMap from "./LeafletMap";

const Charts = () => {
  // State to control which component to display
  const [content, setContent] = useState(true);

  // Toggle function to switch between chart and map views
  const toggle = () => {
    setContent(!content);
  };

  // State variables to store data for cases, deaths, and recovered
  const [cases, setCases] = useState([] as any);
  const [deaths, setDeaths] = useState([] as any);
  const [recovered, setRecovered] = useState([] as any);

  // Function to fetch data from the API
  const getData = async () => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        let { cases, deaths, recovered } = response.data;
        let casesDataPoints = [] as any;
        let deathsDataPoints = [] as any;
        let recoveredDataPoints = [] as any;
        
        // Convert API response to data points for the chart
        Object.entries(cases).map((item) => {
          let date = new Date(item[0]);
          casesDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(deaths).map((item) => {
          let date = new Date(item[0]);
          deathsDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(recovered).map((item) => {
          let date = new Date(item[0]);
          recoveredDataPoints.push([date.getTime(), item[1]]);
        });

        // Update state with the fetched data
        setCases(casesDataPoints);
        setDeaths(deathsDataPoints);
        setRecovered(recoveredDataPoints);
      })
      .catch((error) => {
        console.log(error);  // Log errors to the console
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[1190px] w-full flex flex-col justify-center items-center">
        {/* Toggle between showing the line graph and the leaflet map */}
        {!content ? (
          <div className="flex items-center gap-5">
            <p className="p-4 text-base text-cyan uppercase cursor-pointer font-medium">
              Line Graph
            </p>
            <p
              className="p-4 text-base text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Leaflet Map
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <p
              className="p-4 text-base text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Line Graph
            </p>
            <p className="p-4 text-base text-cyan uppercase cursor-pointer font-medium">
              Leaflet Map
            </p>
          </div>
        )}

        {/* Conditionally render the chart or the map based on the `content` state */}
        {!content ? (
          <div className="w-full">
            <ApexChart cases={cases} deaths={deaths} recovered={recovered} />
          </div>
        ) : (
          <LeafletMap />
        )}
      </div>
    </div>
  );
};

export default Charts;
