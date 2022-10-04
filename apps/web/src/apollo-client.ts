import { ApolloClient, InMemoryCache } from "@apollo/client";
import fragmentTypes from "../__generated__/fragments";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    possibleTypes: fragmentTypes.possibleTypes,
  }),
  headers: {
    authorization: "user:1",
  },
});
