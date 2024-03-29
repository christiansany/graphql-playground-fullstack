import { Resolvers } from "../../../__generated__/schema.generated";
import {
  GraphQLCustomDataSources,
  GraphQLCustomResolversContext,
} from "../../server/types";

const resolvers: Resolvers = {
  Voteable: {
    votesSummary: (parent, _, { dataSources: { Voteable } }) =>
      Voteable.getSummaryById(parent.id),
    userVote: (parent, _, { userId, dataSources: { Voteable } }) =>
      userId ? Voteable.getUserVote(parent.id, userId) : null,
  },
  Vote: {
    user: (parent, _, { dataSources: { User } }) => User.getById(parent.user),
  },
  Mutation: {
    voteSetUp: (_, { id }, context) =>
      handleVoteAction(id, "voteSetUp", context),
    voteSetDown: (_, { id }, context) =>
      handleVoteAction(id, "voteSetDown", context),
    voteSetAbusive: (_, { id }, context) =>
      handleVoteAction(id, "voteSetAbusive", context),
    voteUnset: (_, { id }, context) =>
      handleVoteAction(id, "voteUnset", context),
  },
};

const handleVoteAction = async (
  id: string,
  action: "voteSetUp" | "voteSetDown" | "voteSetAbusive" | "voteUnset",
  { userId, dataSources }: GraphQLCustomResolversContext
) => {
  if (!userId) {
    throw new Error("TODO"); // have userErrors
  }
  const voteableId = await dataSources.Voteable[action](id, userId);
  return getVoteablePayload(voteableId, dataSources);
};

const getVoteablePayload = async (
  id: string,
  dataSources: GraphQLCustomDataSources
) => {
  return {
    voteable: await getVoteable(id, dataSources),
    userErrors: [],
  };
};

const getVoteable = (id: string, dataSources: GraphQLCustomDataSources) =>
  dataSources[getVoteableTypeName(id)].getById(id);

const getVoteableTypeName = (id: string) => {
  const [type] = id.split(":");
  const typeName = (type.charAt(0).toUpperCase() + type.slice(1)) as
    | "Brand"
    | "Product";
  return typeName;
};

export default resolvers;
