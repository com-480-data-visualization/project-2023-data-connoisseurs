import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { EurovisionLayerProps, MaskLayerProps } from "./EuropeMap";

export function AustraliaMap({ handleClickCountry }) {
  const mapRef = useRef(null);

  const viewState = useMemo(
    () => ({
      longitude: 133,
      latitude: -31,
      zoom: 1.2,
    }),
    []
  );
  const eurovisionLayerFilter = useMemo(
    () => ["==", ["get", "iso_3166_1"], "AU"],
    []
  );

  const handleClick = useCallback(
    ({ point }) => {
      const features = mapRef.current?.queryRenderedFeatures(point, {
        layers: [EurovisionLayerProps.id],
      });
      handleClickCountry(features[0]?.properties);
    },
    [handleClickCountry]
  );

  return (
    <Map
      ref={mapRef}
      {...viewState}
      mapStyle="mapbox://styles/mapbox/streets-v8"
      onClick={handleClick}
      onMove={console.log}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...EurovisionLayerProps} filter={eurovisionLayerFilter} />
        <Layer {...MaskLayerProps} />
      </Source>
    </Map>
  );
}
