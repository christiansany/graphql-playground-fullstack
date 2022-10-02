import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    me: (_, __, { userId, dataSources: { User } }) =>
      userId ? User.getById(userId) : null,
    user: (_, { id }, { dataSources: { User } }) => User.getById(id),
    // users: (_, args, { dataSources: { User } }) => User.getByConnection(args),
  },
  // Mutation: {
  //   userCreate: (_, { input }, { dataSources: { User } }) =>
  //     User.createUser(input),
  //   userUpdate: (_, { input }, { dataSources: { User } }) =>
  //     User.updateUser({ ...input, id: parseGID(input.id).id }),
  // },
  // User: {
  //   id: (source) => generateGID("User", source._id.toString()),
  // },
};

export default resolvers;
