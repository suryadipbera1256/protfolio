"use client"; // 1. Must be a client component

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// 2. Map MUST have a defined height and width
const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px"
};

// Map centered near Bellandur, Bangalore
const center = {
  lat: 12.9304,
  lng: 77.6784,
};

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // 3. Uses the env variable
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div className="animate-pulse bg-gray-200 h-[400px] w-full rounded-xl">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
    >
      {/* 4. MUST use MarkerF instead of Marker in modern React */}
      <MarkerF position={center} />
    </GoogleMap>
  );
}