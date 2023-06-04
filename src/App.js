import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationBar } from "./components/NavigationBar";
import { VotesPage } from "./pages/VotesPage";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { PollsPage } from "./pages/PollsPage";
import { HomePage } from "./pages/HomePage";

export const Path = { Votes: "/votes", Polls: "/polls" };

function App() {
  const router = createHashRouter([
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
      errorElement: <ErrorBoundary />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>{error.data}</div>;
}

export default App;
