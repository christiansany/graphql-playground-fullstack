/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  HTML: any;
};

export type Brand = Likeable & Node & Voteable & {
  __typename?: 'Brand';
  id: Scalars['ID'];
  likeSummary: LikeSummary;
  name: Scalars['String'];
  userLike?: Maybe<Like>;
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};

/**
 * Returns a Connection, in accordance with
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types).
 */
export type Connection = {
  /** A list of edges. */
  edges: Array<Edge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Contribution = {
  creator: User;
};

export type DislikeAddPayload = {
  __typename?: 'DislikeAddPayload';
  likable?: Maybe<Likeable>;
  userErrors: Array<UserError>;
};

export type DislikeDeletePayload = {
  __typename?: 'DislikeDeletePayload';
  likable?: Maybe<Likeable>;
  userErrors: Array<UserError>;
};

export type DisplayableError = {
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

/** A generic interface which holds one Edge and a cursor during pagination. */
export type Edge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item implementing the node interface. */
  node: Node;
};

export type Like = {
  __typename?: 'Like';
  type: LikeType;
  user?: Maybe<User>;
};

export type Likeable = {
  id: Scalars['ID'];
  likeSummary: LikeSummary;
  userLike?: Maybe<Like>;
};

export type LikeAddPayload = {
  __typename?: 'LikeAddPayload';
  likable?: Maybe<Likeable>;
  userErrors: Array<UserError>;
};

export type LikeDeletePayload = {
  __typename?: 'LikeDeletePayload';
  likable?: Maybe<Likeable>;
  userErrors: Array<UserError>;
};

export type LikeSummary = {
  __typename?: 'LikeSummary';
  countDislikes: Scalars['Int'];
  countLikes: Scalars['Int'];
};

export enum LikeType {
  Dislike = 'Dislike',
  Like = 'Like'
}

export type Mutation = {
  __typename?: 'Mutation';
  dislikeAdd: DislikeAddPayload;
  dislikeDelete: DislikeDeletePayload;
  likeAdd: LikeAddPayload;
  likeDelete: LikeDeletePayload;
  voteSetAbusive: VoteSetAbusivePayload;
  voteSetDown: VoteSetDownPayload;
  voteSetUp: VoteSetUpPayload;
  voteUnset: VoteUnsetPayload;
};


export type MutationDislikeAddArgs = {
  id: Scalars['ID'];
};


export type MutationDislikeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationLikeAddArgs = {
  id: Scalars['ID'];
};


export type MutationLikeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoteSetAbusiveArgs = {
  id: Scalars['ID'];
};


export type MutationVoteSetDownArgs = {
  id: Scalars['ID'];
};


export type MutationVoteSetUpArgs = {
  id: Scalars['ID'];
};


export type MutationVoteUnsetArgs = {
  id: Scalars['ID'];
};

/**
 * An object with an ID field to support global identification, in accordance with the [Relay
 * specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 */
export type Node = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Likeable & Node & Voteable & {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  likeSummary: LikeSummary;
  name: Scalars['String'];
  price: Scalars['Float'];
  productRatings: ProductRatingConnection;
  productRatingsSummary: ProductRatingsSummary;
  userLike?: Maybe<Like>;
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};


export type ProductProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProductRating = Contribution & Node & Timestamps & {
  __typename?: 'ProductRating';
  comments: ProductRatingCommentConnection;
  cons?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  creator: User;
  creatorIsVerifiedBuyer: Scalars['Boolean'];
  id: Scalars['ID'];
  product: Product;
  pros?: Maybe<Array<Scalars['String']>>;
  ratingScore: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type ProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProductRatingComment = Contribution & Node & Timestamps & {
  __typename?: 'ProductRatingComment';
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['ID'];
  rating: ProductRating;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductRatingCommentConnection = Connection & {
  __typename?: 'ProductRatingCommentConnection';
  edges: Array<ProductRatingCommentEdge>;
  pageInfo: PageInfo;
};

export type ProductRatingCommentEdge = Edge & {
  __typename?: 'ProductRatingCommentEdge';
  cursor: Scalars['String'];
  node: ProductRatingComment;
};

export type ProductRatingConnection = Connection & {
  __typename?: 'ProductRatingConnection';
  edges: Array<ProductRatingEdge>;
  pageInfo: PageInfo;
};

export type ProductRatingEdge = Edge & {
  __typename?: 'ProductRatingEdge';
  cursor: Scalars['String'];
  node: ProductRating;
};

export type ProductRatingsSummary = {
  __typename?: 'ProductRatingsSummary';
  averageRating: Scalars['Float'];
  totalRatings: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<Brand>;
  brands: Array<Brand>;
  me?: Maybe<User>;
  node?: Maybe<Node>;
  nodes: Array<Node>;
  product?: Maybe<Product>;
  productRating?: Maybe<ProductRating>;
  productRatingComment?: Maybe<ProductRatingComment>;
  productRatingComments: ProductRatingCommentConnection;
  productRatings: ProductRatingConnection;
  products: Array<Product>;
  user?: Maybe<User>;
};


export type QueryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingCommentArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Timestamps = {
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type User = Node & {
  __typename?: 'User';
  dislikedBrands: Array<Brand>;
  dislikedProducts: Array<Product>;
  email: Scalars['String'];
  id: Scalars['ID'];
  likedBrands: Array<Brand>;
  likedProducts: Array<Product>;
  productRatingComments: ProductRatingCommentConnection;
  productRatings: ProductRatingConnection;
  username: Scalars['String'];
};


export type UserProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserError = DisplayableError & {
  __typename?: 'UserError';
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  type: VoteType;
  user?: Maybe<User>;
};

export type Voteable = {
  id: Scalars['ID'];
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};

export type VoteSetAbusivePayload = {
  __typename?: 'VoteSetAbusivePayload';
  userErrors: Array<UserError>;
  voteable?: Maybe<Voteable>;
};

export type VoteSetDownPayload = {
  __typename?: 'VoteSetDownPayload';
  userErrors: Array<UserError>;
  voteable?: Maybe<Voteable>;
};

export type VoteSetUpPayload = {
  __typename?: 'VoteSetUpPayload';
  userErrors: Array<UserError>;
  voteable?: Maybe<Voteable>;
};

export type VotesSummary = {
  __typename?: 'VotesSummary';
  /** All cumulative AbusiveVotes */
  countAbusive: Scalars['Int'];
  /** All cumulative DownVotes */
  countDown: Scalars['Int'];
  /** All cumulative UpVotes */
  countUp: Scalars['Int'];
  /** Score is determined as UpVote - DownVote */
  score: Scalars['Int'];
};

export enum VoteType {
  Abusive = 'Abusive',
  Down = 'Down',
  Up = 'Up'
}

export type VoteUnsetPayload = {
  __typename?: 'VoteUnsetPayload';
  userErrors: Array<UserError>;
  voteable?: Maybe<Voteable>;
};

export type GetBrandQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBrandQuery = { __typename?: 'Query', brand?: (
    { __typename?: 'Brand', id: string, name: string }
    & { ' $fragmentRefs': { 'LikeableInfo_Likeable_Brand_Fragment': LikeableInfo_Likeable_Brand_Fragment;'LikeDislikeActions_Likeable_Brand_Fragment': LikeDislikeActions_Likeable_Brand_Fragment;'VoteableInfo_Voteable_Brand_Fragment': VoteableInfo_Voteable_Brand_Fragment;'VoteActions_Voteable_Brand_Fragment': VoteActions_Voteable_Brand_Fragment } }
  ) | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<(
    { __typename?: 'Product', id: string }
    & { ' $fragmentRefs': { 'ProductLink_ProductFragment': ProductLink_ProductFragment } }
  )>, brands: Array<(
    { __typename?: 'Brand', id: string }
    & { ' $fragmentRefs': { 'BrandLink_BrandFragment': BrandLink_BrandFragment } }
  )> };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: (
    { __typename?: 'Product', id: string, name: string }
    & { ' $fragmentRefs': { 'LikeableInfo_Likeable_Product_Fragment': LikeableInfo_Likeable_Product_Fragment;'LikeDislikeActions_Likeable_Product_Fragment': LikeDislikeActions_Likeable_Product_Fragment;'VoteableInfo_Voteable_Product_Fragment': VoteableInfo_Voteable_Product_Fragment;'VoteActions_Voteable_Product_Fragment': VoteActions_Voteable_Product_Fragment } }
  ) | null };

export type BrandLink_BrandFragment = (
  { __typename?: 'Brand', name: string }
  & { ' $fragmentRefs': { 'UseBrandUrl_BrandFragment': UseBrandUrl_BrandFragment } }
) & { ' $fragmentName': 'BrandLink_BrandFragment' };

type LikeDislikeActions_Likeable_Brand_Fragment = { __typename?: 'Brand', id: string, likeSummary: { __typename?: 'LikeSummary', countLikes: number, countDislikes: number }, userLike?: { __typename?: 'Like', type: LikeType } | null } & { ' $fragmentName': 'LikeDislikeActions_Likeable_Brand_Fragment' };

type LikeDislikeActions_Likeable_Product_Fragment = { __typename?: 'Product', id: string, likeSummary: { __typename?: 'LikeSummary', countLikes: number, countDislikes: number }, userLike?: { __typename?: 'Like', type: LikeType } | null } & { ' $fragmentName': 'LikeDislikeActions_Likeable_Product_Fragment' };

export type LikeDislikeActions_LikeableFragment = LikeDislikeActions_Likeable_Brand_Fragment | LikeDislikeActions_Likeable_Product_Fragment;

export type LikeAddMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LikeAddMutation = { __typename?: 'Mutation', likeAdd: { __typename?: 'LikeAddPayload', likable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Brand_Fragment': LikeDislikeActions_Likeable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Product_Fragment': LikeDislikeActions_Likeable_Product_Fragment } }
    ) | null } };

export type LikeDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LikeDeleteMutation = { __typename?: 'Mutation', likeDelete: { __typename?: 'LikeDeletePayload', likable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Brand_Fragment': LikeDislikeActions_Likeable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Product_Fragment': LikeDislikeActions_Likeable_Product_Fragment } }
    ) | null } };

export type DislikeAddMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DislikeAddMutation = { __typename?: 'Mutation', dislikeAdd: { __typename?: 'DislikeAddPayload', likable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Brand_Fragment': LikeDislikeActions_Likeable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Product_Fragment': LikeDislikeActions_Likeable_Product_Fragment } }
    ) | null } };

export type DislikeDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DislikeDeleteMutation = { __typename?: 'Mutation', dislikeDelete: { __typename?: 'DislikeDeletePayload', likable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Brand_Fragment': LikeDislikeActions_Likeable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'LikeDislikeActions_Likeable_Product_Fragment': LikeDislikeActions_Likeable_Product_Fragment } }
    ) | null } };

type LikeableInfo_Likeable_Brand_Fragment = { __typename?: 'Brand', likeSummary: { __typename?: 'LikeSummary', countLikes: number, countDislikes: number }, userLike?: { __typename?: 'Like', type: LikeType, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null } & { ' $fragmentName': 'LikeableInfo_Likeable_Brand_Fragment' };

type LikeableInfo_Likeable_Product_Fragment = { __typename?: 'Product', likeSummary: { __typename?: 'LikeSummary', countLikes: number, countDislikes: number }, userLike?: { __typename?: 'Like', type: LikeType, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null } & { ' $fragmentName': 'LikeableInfo_Likeable_Product_Fragment' };

export type LikeableInfo_LikeableFragment = LikeableInfo_Likeable_Brand_Fragment | LikeableInfo_Likeable_Product_Fragment;

export type ProductLink_ProductFragment = (
  { __typename?: 'Product', name: string }
  & { ' $fragmentRefs': { 'UseProductUrl_ProductFragment': UseProductUrl_ProductFragment } }
) & { ' $fragmentName': 'ProductLink_ProductFragment' };

type VoteActions_Voteable_Brand_Fragment = { __typename?: 'Brand', id: string, votesSummary: { __typename?: 'VotesSummary', score: number, countUp: number, countDown: number, countAbusive: number }, userVote?: { __typename?: 'Vote', type: VoteType, user?: { __typename?: 'User', id: string } | null } | null } & { ' $fragmentName': 'VoteActions_Voteable_Brand_Fragment' };

type VoteActions_Voteable_Product_Fragment = { __typename?: 'Product', id: string, votesSummary: { __typename?: 'VotesSummary', score: number, countUp: number, countDown: number, countAbusive: number }, userVote?: { __typename?: 'Vote', type: VoteType, user?: { __typename?: 'User', id: string } | null } | null } & { ' $fragmentName': 'VoteActions_Voteable_Product_Fragment' };

export type VoteActions_VoteableFragment = VoteActions_Voteable_Brand_Fragment | VoteActions_Voteable_Product_Fragment;

export type VoteSetUpMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VoteSetUpMutation = { __typename?: 'Mutation', voteSetUp: { __typename?: 'VoteSetUpPayload', voteable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Brand_Fragment': VoteActions_Voteable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Product_Fragment': VoteActions_Voteable_Product_Fragment } }
    ) | null } };

export type VoteSetDownMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VoteSetDownMutation = { __typename?: 'Mutation', voteSetDown: { __typename?: 'VoteSetDownPayload', voteable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Brand_Fragment': VoteActions_Voteable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Product_Fragment': VoteActions_Voteable_Product_Fragment } }
    ) | null } };

export type VoteSetAbusiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VoteSetAbusiveMutation = { __typename?: 'Mutation', voteSetAbusive: { __typename?: 'VoteSetAbusivePayload', voteable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Brand_Fragment': VoteActions_Voteable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Product_Fragment': VoteActions_Voteable_Product_Fragment } }
    ) | null } };

export type VoteUnsetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VoteUnsetMutation = { __typename?: 'Mutation', voteUnset: { __typename?: 'VoteUnsetPayload', voteable?: (
      { __typename?: 'Brand' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Brand_Fragment': VoteActions_Voteable_Brand_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs': { 'VoteActions_Voteable_Product_Fragment': VoteActions_Voteable_Product_Fragment } }
    ) | null } };

type VoteableInfo_Voteable_Brand_Fragment = { __typename?: 'Brand', votesSummary: { __typename?: 'VotesSummary', score: number, countUp: number, countDown: number, countAbusive: number }, userVote?: { __typename?: 'Vote', type: VoteType, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null } & { ' $fragmentName': 'VoteableInfo_Voteable_Brand_Fragment' };

type VoteableInfo_Voteable_Product_Fragment = { __typename?: 'Product', votesSummary: { __typename?: 'VotesSummary', score: number, countUp: number, countDown: number, countAbusive: number }, userVote?: { __typename?: 'Vote', type: VoteType, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null } & { ' $fragmentName': 'VoteableInfo_Voteable_Product_Fragment' };

export type VoteableInfo_VoteableFragment = VoteableInfo_Voteable_Brand_Fragment | VoteableInfo_Voteable_Product_Fragment;

export type UseBrandUrl_BrandFragment = { __typename?: 'Brand', id: string } & { ' $fragmentName': 'UseBrandUrl_BrandFragment' };

export type UseProductUrl_ProductFragment = { __typename?: 'Product', id: string } & { ' $fragmentName': 'UseProductUrl_ProductFragment' };

export const UseBrandUrl_BrandFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"useBrandUrl_Brand"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<UseBrandUrl_BrandFragment, unknown>;
export const BrandLink_BrandFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandLink_Brand"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"useBrandUrl_Brand"}}]}},...UseBrandUrl_BrandFragmentDoc.definitions]} as unknown as DocumentNode<BrandLink_BrandFragment, unknown>;
export const LikeDislikeActions_LikeableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Likeable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likeSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countLikes"}},{"kind":"Field","name":{"kind":"Name","value":"countDislikes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<LikeDislikeActions_LikeableFragment, unknown>;
export const LikeableInfo_LikeableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LikeableInfo_Likeable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Likeable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countLikes"}},{"kind":"Field","name":{"kind":"Name","value":"countDislikes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<LikeableInfo_LikeableFragment, unknown>;
export const UseProductUrl_ProductFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"useProductUrl_Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<UseProductUrl_ProductFragment, unknown>;
export const ProductLink_ProductFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductLink_Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"useProductUrl_Product"}}]}},...UseProductUrl_ProductFragmentDoc.definitions]} as unknown as DocumentNode<ProductLink_ProductFragment, unknown>;
export const VoteActions_VoteableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VoteActions_Voteable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Voteable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"votesSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"countUp"}},{"kind":"Field","name":{"kind":"Name","value":"countDown"}},{"kind":"Field","name":{"kind":"Name","value":"countAbusive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userVote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<VoteActions_VoteableFragment, unknown>;
export const VoteableInfo_VoteableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VoteableInfo_Voteable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Voteable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votesSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"countUp"}},{"kind":"Field","name":{"kind":"Name","value":"countDown"}},{"kind":"Field","name":{"kind":"Name","value":"countAbusive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userVote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<VoteableInfo_VoteableFragment, unknown>;
export const GetBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeableInfo_Likeable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteableInfo_Voteable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}},...LikeableInfo_LikeableFragmentDoc.definitions,...LikeDislikeActions_LikeableFragmentDoc.definitions,...VoteableInfo_VoteableFragmentDoc.definitions,...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<GetBrandQuery, GetBrandQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductLink_Product"}}]}},{"kind":"Field","name":{"kind":"Name","value":"brands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandLink_Brand"}}]}}]}},...ProductLink_ProductFragmentDoc.definitions,...BrandLink_BrandFragmentDoc.definitions]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeableInfo_Likeable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteableInfo_Voteable"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}},...LikeableInfo_LikeableFragmentDoc.definitions,...LikeDislikeActions_LikeableFragmentDoc.definitions,...VoteableInfo_VoteableFragmentDoc.definitions,...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const LikeAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}}]}}]}}]}},...LikeDislikeActions_LikeableFragmentDoc.definitions]} as unknown as DocumentNode<LikeAddMutation, LikeAddMutationVariables>;
export const LikeDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}}]}}]}}]}},...LikeDislikeActions_LikeableFragmentDoc.definitions]} as unknown as DocumentNode<LikeDeleteMutation, LikeDeleteMutationVariables>;
export const DislikeAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislikeAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}}]}}]}}]}},...LikeDislikeActions_LikeableFragmentDoc.definitions]} as unknown as DocumentNode<DislikeAddMutation, DislikeAddMutationVariables>;
export const DislikeDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislikeDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LikeDislikeActions_Likeable"}}]}}]}}]}},...LikeDislikeActions_LikeableFragmentDoc.definitions]} as unknown as DocumentNode<DislikeDeleteMutation, DislikeDeleteMutationVariables>;
export const VoteSetUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteSetUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteSetUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}}]}},...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<VoteSetUpMutation, VoteSetUpMutationVariables>;
export const VoteSetDownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteSetDown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteSetDown"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}}]}},...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<VoteSetDownMutation, VoteSetDownMutationVariables>;
export const VoteSetAbusiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteSetAbusive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteSetAbusive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}}]}},...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<VoteSetAbusiveMutation, VoteSetAbusiveMutationVariables>;
export const VoteUnsetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteUnset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteUnset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VoteActions_Voteable"}}]}}]}}]}},...VoteActions_VoteableFragmentDoc.definitions]} as unknown as DocumentNode<VoteUnsetMutation, VoteUnsetMutationVariables>;