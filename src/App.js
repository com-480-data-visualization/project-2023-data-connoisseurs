import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Header } from "./Header";
import { EuropeMap } from "./EuropeMap";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <EuropeMap />
      </div>
    </ChakraProvider>
  );
}

export default App;
