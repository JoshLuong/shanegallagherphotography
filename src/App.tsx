import React from "react";
import {
  BrowserRouter as Router,
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
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;