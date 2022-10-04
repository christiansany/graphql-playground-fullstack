import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    brand: (_, { id }, { dataSources: { Brand } }) => Brand.getById(id),
    brands: (_, __, { dataSources: { Brand } }) => Brand.getAllBrands(),
  },
};

export default resolvers;
