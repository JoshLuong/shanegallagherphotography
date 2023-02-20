import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useRoutes } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import ProjectPage from "./components/project/ProjectPage";

export const link = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/7quy4nqi53yl",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer PfEBSBXzKgGX1sCdl8yJojYOPZGCYHaCdRiC-ouRE0w`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/projects/:projectName", element: <ProjectPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default AppWrapper;
