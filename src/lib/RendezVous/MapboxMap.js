// MapboxMap.js
import React from 'react';
import Map, { Marker } from 'react-map-gl';

const MapboxMap = ({ onLocationSelect }) => {
  const handleMapClick = (event) => {
    const [longitude, latitude] = event.lngLat;
    onLocationSelect(`Latitude: ${latitude}, Longitude: ${longitude}`); // Format as desired
  };

  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 4,
      }}
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onClick={handleMapClick}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // Use an environment variable for your token
    >
      {/* Optionally, add a marker for the selected location */}
    </Map>
  );
};

export default MapboxMap;