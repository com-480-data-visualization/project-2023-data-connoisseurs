import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import Map, { Layer, Source } from "react-map-gl";

export function EuropeMap({ countries, onClickCountry }) {
  const mapRef = useRef(null);

  const eurovisionLayerProps = useMemo(
    () => ({
      id: "eurovision-countries",
      type: "fill",
      "source-layer": "country_boundaries",
      paint: {
        "fill-color": "#4FD1C5",
        "fill-outline-color": "#FFFFFF",
      },
      filter: ["in", ["get", "iso_3166_1"], ["literal", countries]],
    }),
    [countries]
  );
  const maskLayerProps = useMemo(
    () => ({
      id: "other-countries-mask",
      beforeId: eurovisionLayerProps.id,
      type: "fill",
      "source-layer": "country_boundaries",
      paint: {
        "fill-color": "#E2E8F0",
        "fill-outline-color": "#FFFFFF",
      },
    }),
    []
  );

  const handleClickCountry = useCallback(({ point }) => {
    console.log(mapRef.current);
    const features = mapRef.current?.queryRenderedFeatures(point, {
      layers: [eurovisionLayerProps.id],
    });
    console.log(features);
    onClickCountry(features[0]?.properties);
  }, []);

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        latitude: 50.905,
        longitude: 6.528,
        zoom: 2.5,
      }}
      className="h-full w-full"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={handleClickCountry}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...eurovisionLayerProps} />
        <Layer {...maskLayerProps} />
      </Source>
    </Map>
  );
}
