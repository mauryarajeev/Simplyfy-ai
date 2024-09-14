// Configuration object for the tile layer
const tileLayer = {
  // Attribution text to credit OpenStreetMap contributors
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  // URL template for the tile images
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

// Export the tile layer configuration
export default tileLayer;
