import L from 'leaflet';

// Create a custom Leaflet icon
const iconPin = new L.Icon<any>({
    // URL for the icon image
    iconUrl: require('../assets/pin.svg'),
    // URL for the retina display version of the icon image (usually for high-resolution screens)
    iconRetinaUrl: require('../assets/pin.svg'),
    // Position of the icon relative to its anchor point
    iconAnchor: [30, 75], // Example anchor point: adjust as needed
    // Position of the popup relative to the icon
    popupAnchor: [0, -75], // Example popup anchor: adjust as needed
    // URL for the shadow image (if used)
    shadowUrl: null,
    // Size of the shadow image (if used)
    shadowSize: null,
    // Position of the shadow relative to the icon (if used)
    shadowAnchor: null,
    // Size of the icon image
    iconSize: new L.Point(60, 75),
    // CSS class for the icon
    className: 'leaflet-div-icon'
});

export { iconPin };
