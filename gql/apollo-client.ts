import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

export default client;
