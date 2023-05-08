// @flow
import * as React from "react";
import { useRef, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";

// TODO: link up to countries in eurovision dataset
export const EurovisionCountries = ["GB", "CH", "FR", "DE"];

const MaskLayerProps = {
  paint: {
    "fill-color": "#E2E8F0",
    "fill-outline-color": "#FFFFFF",
  },
};

const EurovisionLayerProps = {
  paint: {
    "fill-color": "#4FD1C5",
    "fill-outline-color": "#FFFFFF",
  },
  filter: ["in", ["get", "iso_3166_1"], ["literal", EurovisionCountries]],
};

export function EuropeMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  const onLoad = () => {
    setMap(mapRef.current);
  };

  const onClick = (e) => {
    console.log(e);
    const features = map?.queryRenderedFeatures(e.point, {
      layers: ["eurovision-countries"],
    });
    console.log(features);
  };

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        latitude: 50.905,
        longitude: 6.528,
        zoom: 2.5,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      interactiveLayerIds={["eurovision-countries"]} // TODO only passes feature in events for geoJson type
      onLoad={onLoad}
      onClick={onClick}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer
          id="eurovision-countries"
          type="fill"
          source-layer="country_boundaries"
          {...EurovisionLayerProps}
        />
        <Layer
          id="other-countries-mask"
          beforeId="eurovision-countries"
          type="fill"
          source-layer="country_boundaries"
          {...MaskLayerProps}
        />
      </Source>
    </Map>
  );
}
