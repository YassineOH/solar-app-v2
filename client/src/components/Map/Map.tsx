import { useState, useCallback } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

import { useGlobalContext, AppContextType } from '@context';
import Spinner from '@components/Spinner';

function Map() {
  const { coords, setCoords } = useGlobalContext() as AppContextType;
  const [center, setCenter] = useState({
    lat: 33.91770569103704,
    lng: -6.830671924014748,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY, // ,
  });
  const onLoad = useCallback(
    (googleMap: google.maps.Map) => setMap(googleMap),
    []
  );

  const renderMap = () => (
    <GoogleMap
      mapContainerClassName="w-full aspect-square xl:w-10/12 mx-auto md:aspect-auto md:h-96 lg:h-80 rounded-md z-0 relative"
      center={center}
      zoom={10}
      onLoad={onLoad}
      options={{
        streetViewControl: false,
      }}
      onClick={(e: google.maps.MapMouseEvent) => {
        setCenter({
          lat: map?.getCenter()?.lat() || 0,
          lng: map?.getCenter()?.lng() || 0,
        });
        setCoords({
          lat: e.latLng?.lat() || 0,
          lng: e.latLng?.lng() || 0,
        });
      }}
    >
      <MarkerF zIndex={1000} position={coords} draggable />
    </GoogleMap>
  );

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <Spinner />;
}
export default Map;
