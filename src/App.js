import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationBar } from "./components/NavigationBar";
import { VotesPage } from "./pages/VotesPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <VotesPage />
    </div>
  );
}

export default App;
