import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import necessary components from react-leaflet
import tileLayer from '../utils/tileLayer'; // Import tileLayer configuration for the map

import L from 'leaflet'; // Import Leaflet library for map functionality
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for map styling

// Default center coordinates for the map
const center = [52.22977, 21.01178] as any;

// Array of points to be marked on the map
const points = [
  {
    lat: 33,
    lng: 65,
    title: 'AF'
  },
  {
    lat: 52.22924516170657,
    lng: 21.011320352554325,
    title: 'point 2'
  },
  {
    lat: 52.229511304688444,
    lng: 21.01270973682404,
    title: 'point 3'
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: 'point 4'
  },
];

// Component to render markers on the map
const MyMarkers = ({ data }: any) => {
  return data.map(({ lat, lng, title }: any, index: any) => (
    <Marker
      key={index} // Unique key for each marker
      position={{ lat, lng }} // Position of the marker
    >
      <Popup>{title}</Popup> {/* Popup content when clicking the marker */}
    </Marker>
  ));
}

// Main MapWrapper component
const MapWrapper = ({ data2 }: any) => {
  return (
    <MapContainer 
      className='map' // CSS class for map styling
      center={center} // Center coordinates of the map
      zoom={2} // Initial zoom level of the map
      scrollWheelZoom={true} // Enable zooming with scroll wheel
    >
      <TileLayer {...tileLayer} /> {/* TileLayer to define map appearance */}
      <MyMarkers data={points} /> {/* Render markers on the map */}
    </MapContainer>
  );
}

export default MapWrapper;
