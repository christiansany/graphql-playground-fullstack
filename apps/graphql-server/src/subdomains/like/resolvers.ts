import { ProductDocument } from "../product/data-sources/product.types";
import { BrandDocument } from "../brand/data-sources/brand.types";
import { Resolvers } from "../../../__generated__/schema.generated";
import {
  GraphQLCustomDataSources,
  GraphQLCustomResolversContext,
} from "../../server/types";

const resolvers: Resolvers = {
  Likeable: {
    __resolveType: (source) => getLikeableTypeName(source.id),
  },
  Like: {
    user: (parent, _, { dataSources: { User } }) => User.getById(parent.user),
  },
  User: {
    likedProducts: async (parent, _, { dataSources }) =>
      (
        await dataSources.Likeable.getLikablesFromUser(
          "product",
          parent.id,
          "Like"
        )
      ).map((id) => getLikeable(id, dataSources) as Promise<ProductDocument>),
    dislikedProducts: async (parent, _, { dataSources }) =>
      (
        await dataSources.Likeable.getLikablesFromUser(
          "product",
          parent.id,
          "Dislike"
        )
      ).map((id) => getLikeable(id, dataSources) as Promise<ProductDocument>),
    likedBrands: async (parent, _, { dataSources }) =>
      (
        await dataSources.Likeable.getLikablesFromUser(
          "brand",
          parent.id,
          "Like"
        )
      ).map((id) => getLikeable(id, dataSources) as Promise<BrandDocument>),
    dislikedBrands: async (parent, _, { dataSources }) =>
      (
        await dataSources.Likeable.getLikablesFromUser(
          "brand",
          parent.id,
          "Dislike"
        )
      ).map((id) => getLikeable(id, dataSources) as Promise<BrandDocument>),
  },
  Product: {
    likeSummary: (parent, _, { dataSources: { Likeable } }) =>
      Likeable.getSummaryById(parent.id),
    userLike: (parent, _, { userId, dataSources: { Likeable } }) =>
      userId ? Likeable.getUserVote(parent.id, userId) : null,
  },
  Brand: {
    likeSummary: (parent, _, { dataSources: { Likeable } }) =>
      Likeable.getSummaryById(parent.id),
    userLike: (parent, _, { userId, dataSources: { Likeable } }) =>
      userId ? Likeable.getUserVote(parent.id, userId) : null,
  },
  Mutation: {
    likeAdd: async (_, { id }, context) =>
      handleLikeAction(id, "likeAdd", context),
    likeDelete: async (_, { id }, context) =>
      handleLikeAction(id, "likeDelete", context),
    dislikeAdd: async (_, { id }, context) =>
      handleLikeAction(id, "dislikeAdd", context),
    dislikeDelete: (_, { id }, context) =>
      handleLikeAction(id, "dislikeDelete", context),
  },
};

const handleLikeAction = async (
  id: string,
  action: "likeAdd" | "likeDelete" | "dislikeAdd" | "dislikeDelete",
  { userId, dataSources }: GraphQLCustomResolversContext
) => {
  if (!userId) {
    throw new Error("TODO"); // have userErrors
  }
  const likeableId = await dataSources.Likeable[action](id, userId);
  return getLikeablePayload(likeableId, dataSources);
};

const getLikeablePayload = async (
  id: string,
  dataSources: GraphQLCustomDataSources
) => ({
  likable: await getLikeable(id, dataSources),
  userErrors: [],
});

const getLikeable = (id: string, dataSources: GraphQLCustomDataSources) =>
  dataSources[getLikeableTypeName(id)].getById(id);

const getLikeableTypeName = (id: string) => {
  const [type] = id.split(":");
  const typeName = (type.charAt(0).toUpperCase() + type.slice(1)) as
    | "Brand"
    | "Product";
  return typeName;
};

export default resolvers;
