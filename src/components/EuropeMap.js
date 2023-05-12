// @flow
import * as React from "react";
import {useCallback, useRef} from "react";
import Map, {Layer, Source} from "react-map-gl";

// TODO: link up to countries in eurovision dataset
export const EurovisionCountries = ["GB", "CH", "FR", "DE"];

const EurovisionLayerProps = {
  id: "eurovision-countries",
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#4FD1C5",
    "fill-outline-color": "#FFFFFF",
  },
  filter: ["in", ["get", "iso_3166_1"], ["literal", EurovisionCountries]],
};

const MaskLayerProps = {
  id: "other-countries-mask",
  beforeId: EurovisionLayerProps.id,
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#E2E8F0",
    "fill-outline-color": "#FFFFFF",
  },
};

export function EuropeMap({ onClickCountry }) {
  const mapRef = useRef(null);

  const onClick = useCallback(({ point }) => {
    console.log(mapRef.current);
    const features = mapRef.current?.queryRenderedFeatures(point, {
      layers: [EurovisionLayerProps.id],
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
      onClick={onClick}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...EurovisionLayerProps} />
        <Layer {...MaskLayerProps} />
      </Source>
    </Map>
  );
}
