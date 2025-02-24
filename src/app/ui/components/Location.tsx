"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const Location = () => {
  const markerPosition = { lat: -1.2964734, lng: 36.7899051 };

  return (
    <section className="container mx-auto max-w-6xl">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <Map
          style={{ width: "100%", height: "400px" }}
          defaultCenter={markerPosition}
          defaultZoom={17}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={markerPosition} />
        </Map>
      </APIProvider>
    </section>
  );
};

export default Location;
