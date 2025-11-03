// components/MyLocationMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '300px',
};

export default function Map() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyBRJQDpFTb2kUwGSZAYSAgvRFO_E_ZbWHc"}>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || { lat: 12.926058, lng: 77.675242}} // fallback to Jakarta
        zoom={11}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
      <button onClick={getLocation} type="button" className=" mt-2 min-w-sm text-white bg-linear-to-r from-cyan-600 to-black hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-blue-800 ">Show My Location 📍</button>
    </LoadScript>
  );
}

// 12.930779 , 77.678216
// 12.926058, 77.675242