import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";

export const EurovisionLayerProps = {
  id: "eurovision-countries",
  beforeId: "country-label-sm",
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#0043FF",
    "fill-outline-color": "#FFFFFF",
  },
};

export const MaskLayerProps = {
  id: "masked-countries",
  beforeId: EurovisionLayerProps.id,
  type: "fill",
  "source-layer": "country_boundaries",
  paint: {
    "fill-color": "#E2E8F0",
    "fill-outline-color": "#FFFFFF",
  },
};

export const ArrowsLayerProps = {
  id: "arrows-layer",
  type: "line",
  source: "arrows",
  layout: {},
  paint: {
    "line-color": "red",
    "line-width": 2,
  },
};

export function EuropeMap({
  highlightCountries = [],
  handleClickCountry,
  arrowsCoordinates,
}) {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [labelLayers, setLabelLayers] = useState([]);

  const eurovisionLayerFilter = useMemo(
    () => ["in", ["get", "iso_3166_1"], ["literal", highlightCountries]],
    [highlightCountries]
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
      map?.setFilter(id, ["all", filter, ["in", "code", ...highlightCountries]])
    );
  }, [labelLayers, highlightCountries]);

  const handleClick = useCallback(({ point }) => {
    const features = mapRef.current?.queryRenderedFeatures(point, {
      layers: [EurovisionLayerProps.id],
    });
    handleClickCountry(features[0]?.properties);
  }, []);

  const arrowsFeaturesData = useMemo(() => {
    const arrowsFeatures = arrowsCoordinates?.map(([start, end]) => ({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [start.longitude, start.latitude],
          [end.longitude, end.latitude],
        ],
      },
    }));
    return {
      type: "FeatureCollection",
      features: arrowsFeatures,
    };
  }, [arrowsCoordinates]);

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
        <Layer {...EurovisionLayerProps} filter={eurovisionLayerFilter} />
        <Layer {...MaskLayerProps} />
      </Source>
      {arrowsCoordinates && (
        <Source id="arrows" type="geojson" data={arrowsFeaturesData}>
          <Layer {...ArrowsLayerProps} />
        </Source>
      )}
    </Map>
  );
}
