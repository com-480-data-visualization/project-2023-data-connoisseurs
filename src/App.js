import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationBar } from "./components/NavigationBar";
import { VotesPage } from "./pages/VotesPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { PollsPage } from "./pages/PollsPage";
import { HomePage } from "./pages/HomePage";

export const Path = { Votes: "/votes", Polls: "/polls" };

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App flex h-screen flex-col">
          <NavigationBar />
          <Outlet />
        </div>
      ),
      children: [
        { index: true, element: <HomePage /> },
        { path: Path.Votes, element: <VotesPage /> },
        { path: Path.Polls, element: <PollsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
