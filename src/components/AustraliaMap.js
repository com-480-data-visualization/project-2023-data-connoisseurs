import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { EurovisionLayer, MaskLayer } from "./EuropeMap";

export function AustraliaMap({ handleClickCountry }) {
  const mapRef = useRef(null);

  const viewState = useMemo(
    () => ({
      longitude: 133.50854032552678,
      latitude: -27.43116012040209,
      zoom: 1.1603152413621571,
    }),
    []
  );
  const eurovisionLayerProps = useMemo(
    () => ({
      ...EurovisionLayer,
      filter: ["in", ["get", "iso_3166_1"], ["literal", "AU"]],
    }),
    []
  );

  const handleClick = useCallback(({ point }) => {
    const features = mapRef.current?.queryRenderedFeatures(point, {
      layers: [EurovisionLayer.id],
    });
    handleClickCountry(features[0]?.properties);
  }, []);

  return (
    <Map
      ref={mapRef}
      {...viewState}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={handleClick}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...eurovisionLayerProps} />
        <Layer {...MaskLayer} />
      </Source>
    </Map>
  );
}
