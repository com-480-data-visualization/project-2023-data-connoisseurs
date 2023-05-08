import "./App.css";
import { Button, ChakraProvider, Icon } from "@chakra-ui/react";
import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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

function App() {
  const links = [
    { name: "Votes", key: "votes" },
    { name: "Polls", key: "polls" },
  ];
  const isActive = (name) => name === "votes";

  return (
    <ChakraProvider>
      <div className="App">
        {/* Navigation Bar */}
        <div className="p-3 border-bottom d-flex flex-row justify-content-between">
          <div className="mx-3 d-flex align-items-center">
            <Icon viewBox="0 0 238 250">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m25.005 111.471c0.6-53.792 28.594-70.628 43.839-70.628 21.29 0 30.083 16.253 31.52 23.449 1.436 7.19 9.494 12.941 12.083 1.147 2.591-11.794 27.637-47.758 58.42-47.758 28.192 0 37.956 29.073 37.111 53.801-2.307 67.318-89.028 121.045-100.443 154.97-10.164-20.547-83.247-50.248-82.53-114.981l0 0zM180.938 1c-25.317 0-55.258 18.698-73.381 49.771-4.89-11.222-22.313-23.451-43.024-23.451-16.689 0-63.533 20.858-63.533 88.178 0 86.88 87.901 104.725 105.671 131.729 1.221 1.857 5.154 3.26 6.655-1.177 14.179-41.845 124.125-89.125 124.125-174.279-0.001-47.756-31.197-70.771-56.513-70.771z"
              />
            </Icon>
            <span className="ms-1 fw-bold">EUROVISION GRAPHS</span>
          </div>
          <div className="mx-3">
            {links.map(({ name, key }) => (
              <Button
                className="mx-2"
                key={key}
                variant="link"
                colorScheme="teal"
                isActive={isActive(key)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
        {/*    Europe Map */}
        <div>
          <Map
            initialViewState={{
              latitude: 50.905,
              longitude: 6.528,
              zoom: 2.5,
            }}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {/* TODO: ocean background layer */}
            <Source
              id="country-boundaries"
              type="vector"
              url="mapbox://mapbox.country-boundaries-v1"
            >
              <Layer
                id="other-countries-mask"
                type="fill"
                source-layer="country_boundaries"
                {...MaskLayerProps}
              />
              <Layer
                id="eurovision-countries"
                type="fill"
                source-layer="country_boundaries"
                {...EurovisionLayerProps}
              />
            </Source>
          </Map>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
