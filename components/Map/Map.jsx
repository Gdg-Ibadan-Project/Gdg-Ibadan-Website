import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const MapComponent = () => {
    const center = useMemo(() => ({ lat: 44, lng: -89 }), []);

    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={styles.map__container}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return !isLoaded ? <div>Loading...</div> : <MapComponent />;
};

export default Map;
