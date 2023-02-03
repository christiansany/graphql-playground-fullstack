import { resolvers, typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";

import UsersAPI from "../subdomains/user/data-sources/user";
import ProductsAPI from "../subdomains/product/data-sources/product";
import BrandsAPI from "../subdomains/brand/data-sources/brand";
import LikeableAPI from "../subdomains/like/data-sources/like";
import VoteableAPI from "../subdomains/vote/data-sources/vote";
import DataLoaders from "../subdomains/dataLoaders";

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
    inheritResolversFromInterfaces: true,
  }),
  context: ({ req }) => {
    const userId = req.headers.authorization;
    return { userId, dataLoaders: new DataLoaders() };
  },
  dataSources: () => ({
    User: new UsersAPI(),
    Brand: new BrandsAPI(),
    Product: new ProductsAPI(),
    Likeable: new LikeableAPI(),
    Voteable: new VoteableAPI(),
  }),
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
