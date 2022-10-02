import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    brand: (_, { id }, { dataSources: { Brand } }) => Brand.getById(id),
  },
};

export default resolvers;
