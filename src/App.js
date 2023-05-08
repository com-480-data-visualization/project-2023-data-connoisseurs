import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationBar } from "./components/NavigationBar";
import { VotesPage } from "./pages/VotesPage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavigationBar />
        <VotesPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
