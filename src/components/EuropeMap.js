import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";

export const EurovisionLayer = {
  id: "eurovision-countries",
  beforeId: "country-label-sm",
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#0043FF",
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
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [labelLayers, setLabelLayers] = useState([]);

  const eurovisionLayerFilter = useMemo(
    () => ["in", ["get", "iso_3166_1"], ["literal", countries]],
    [countries]
  );

  const handleLoad = useCallback(() => setMap(mapRef.current?.getMap()), []);

  useEffect(() => {
    if (!map) return;

    setLabelLayers(
      map
        ?.getStyle()
        .layers.filter((layer) => layer["source-layer"] === "country_label")
        .map(({ id }) => ({ id, filter: map?.getFilter(id) }))
    );
  }, [map]);

  useEffect(() => {
    // bring country labels on top
    labelLayers?.forEach(({ id, filter }) =>
      map?.setFilter(id, ["all", filter, ["in", "code", ...countries]])
    );
  }, [labelLayers, countries]);

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
        longitude: 39.27018131127352,
        latitude: 55.495431909574364,
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
