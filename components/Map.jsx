"use client"; 

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%", // Let the parent container control the height
  minHeight: "400px",
  borderRadius: "24px" // Matches the 3xl rounding of the theme
};

// Premium Dark Theme for Google Maps to match your #050505 aesthetic
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#111111" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
  { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] }
];

// We now accept 'center' and 'userLocation' as props from the Contact page
export default function Map({ center, userLocation }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  });

  if (loadError) return <div className="text-red-500 p-6 text-center bg-[#0a0a0a] rounded-3xl border border-[#1f1f1f]">Error loading maps. Check your API Key.</div>;
  if (!isLoaded) return <div className="animate-pulse bg-[#0a0a0a] border border-[#1f1f1f] h-[400px] w-full rounded-[24px] flex items-center justify-center text-[#888888] font-medium tracking-wide">Loading Premium Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={userLocation ? 15 : 13} // Zoom in closer if the user clicks "Find My Location"
      options={{
        styles: darkMapStyle,
        disableDefaultUI: true, // Hides clunky default buttons for a cleaner look
        zoomControl: true,
      }}
    >
      {/* 1. Default Location Marker (Bellandur) */}
      <MarkerF position={{ lat: 12.9304, lng: 77.6784 }} />

      {/* 2. Dynamic User Location Marker (Blue Dot) */}
      {userLocation && (
        <MarkerF 
          position={userLocation} 
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }}
        />
      )}
    </GoogleMap>
  );
}