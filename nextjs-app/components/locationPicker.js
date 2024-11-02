// import React, { useState } from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 19.0760,
//   lng: 72.8777,
// };

// export default function LocationPicker({ onLocationSelect }) {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
//   });

//   const [selectedLocation, setSelectedLocation] = useState(center);

//   const handleMapClick = (event) => {
//     const location = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(location);
//     onLocationSelect(location);
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={10}
//       center={selectedLocation}
//       onClick={handleMapClick}
//     >
//       <Marker position={selectedLocation} />
//     </GoogleMap>
//   );
// }