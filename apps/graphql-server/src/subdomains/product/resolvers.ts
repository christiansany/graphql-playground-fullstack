import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    product: (_, { id }, { dataSources: { Product } }) => Product.getById(id),
    products: (_, __, { dataSources: { Product } }) => Product.getAllProducts(),
    // products: (_, args, { dataSources: { Product } }) =>
    //   Product.getByConnection(args),
  },
  // Mutation: {
  //   productCreate: (_, { input }, { dataSources: { Product } }) =>
  //     Product.createProduct(input),
  //   productUpdate: (_, { input }, { dataSources: { Product } }) =>
  //     Product.updateProduct({ ...input, id: parseGID(input.id).id }),
  // },
  // Product: {
  //   id: (source) => generateGID("Product", source._id.toString()),
  // },
};

export default resolvers;
