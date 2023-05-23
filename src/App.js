import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationBar } from "./components/NavigationBar";
import { VotesPage } from "./pages/VotesPage";
import { PollsPage } from "./pages/PollsPage";

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <NavigationBar />
      <VotesPage />
      <PollsPage />
    </div>
  );
}

export default App;
