import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useRoutes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Routes from "./routes";

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
    { path: Routes.HOME, element: <LandingPage /> },
    { path: Routes.EARLS, element: null },
    { path: Routes.KOLD, element: null },
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
