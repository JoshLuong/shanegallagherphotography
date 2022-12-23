import {
  useRoutes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Routes from "./routes";


const App = () => {
  let routes = useRoutes([
    { path: Routes.HOME, element: <LandingPage /> },
    { path: Routes.EARLS, element: null },
    { path: Routes.KOLD, element: null }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <App />
  );
};

export default AppWrapper;