import {
  useRoutes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <App />
  );
};

export default AppWrapper;