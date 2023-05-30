import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import Map, { Layer, Source } from "react-map-gl";

export const EurovisionLayer = {
  id: "eurovision-countries",
  beforeId: "country-label-sm",
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#4FD1C5",
    "fill-outline-color": "#FFFFFF",
  },
};

export const MaskLayer = {
  id: "masked-countries",
  beforeId: EurovisionLayer.id,
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#E2E8F0",
    "fill-outline-color": "#FFFFFF",
  },
};

export function EuropeMap({ countries, handleClickCountry }) {
  const mapRef = useRef(null);

  const eurovisionLayerFilter = useMemo(
    () => ["in", ["get", "iso_3166_1"], ["literal", countries]],
    [countries]
  );

  const handleLoad = useCallback(() => {
    const map = mapRef.current?.getMap();
    // bring country labels on top
    map
      .getStyle()
      .layers.filter((layer) => layer["source-layer"] === "country_label")
      .forEach((layer) =>
        map.setFilter(layer.id, [
          "all",
          map.getFilter(layer.id),
          ["in", "code", ...countries],
        ])
      );
  }, [mapRef, countries]);

  const handleClick = useCallback(({ point }) => {
    const features = mapRef.current?.queryRenderedFeatures(point, {
      layers: [EurovisionLayer.id],
    });
    handleClickCountry(features[0]?.properties);
  }, []);

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: 44.79002198838046,
        latitude: 55.193626207922364,
        zoom: 2.727659403162694,
        minZoom: 2,
        maxZoom: 5,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v8"
      onLoad={handleLoad}
      onClick={handleClick}
    >
      <Source
        id="country-boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...EurovisionLayer} filter={eurovisionLayerFilter} />
        <Layer {...MaskLayer} />
      </Source>
    </Map>
  );
}
