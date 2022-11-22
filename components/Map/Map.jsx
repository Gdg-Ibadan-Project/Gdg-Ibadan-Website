import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAxTrGqIHWJ9D3I6BiL2wHvl6qzE3VNk8w",
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
