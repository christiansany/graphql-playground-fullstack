import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { UserDocument } from '../src/subdomains/user/data-sources/user.types';
import { ProductDocument } from '../src/subdomains/product/data-sources/product.types';
import { BrandDocument } from '../src/subdomains/brand/data-sources/brand.types';
import { LikeDocument } from '../src/subdomains/like/data-sources/like.types';
import { VoteDocument } from '../src/subdomains/vote/data-sources/vote.types';
import { GraphQLCustomResolversContext } from '../src/server/types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductRatingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserProductRatingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<BrandDocument>;
  Connection: ResolversTypes['ProductRatingCommentConnection'] | ResolversTypes['ProductRatingConnection'];
  Contribution: ResolversTypes['ProductRating'] | ResolversTypes['ProductRatingComment'];
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DislikeAddPayload: ResolverTypeWrapper<Omit<DislikeAddPayload, 'likable'> & { likable?: Maybe<ResolversTypes['Likeable']> }>;
  DislikeDeletePayload: ResolverTypeWrapper<Omit<DislikeDeletePayload, 'likable'> & { likable?: Maybe<ResolversTypes['Likeable']> }>;
  DisplayableError: ResolversTypes['UserError'];
  Edge: ResolversTypes['ProductRatingCommentEdge'] | ResolversTypes['ProductRatingEdge'];
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HTML: ResolverTypeWrapper<Scalars['HTML']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Like: ResolverTypeWrapper<LikeDocument>;
  Likeable: ResolversTypes['Brand'] | ResolversTypes['Product'];
  LikeAddPayload: ResolverTypeWrapper<Omit<LikeAddPayload, 'likable'> & { likable?: Maybe<ResolversTypes['Likeable']> }>;
  LikeDeletePayload: ResolverTypeWrapper<Omit<LikeDeletePayload, 'likable'> & { likable?: Maybe<ResolversTypes['Likeable']> }>;
  LikeSummary: ResolverTypeWrapper<LikeSummary>;
  LikeType: LikeType;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Brand'] | ResolversTypes['Product'] | ResolversTypes['ProductRating'] | ResolversTypes['ProductRatingComment'] | ResolversTypes['User'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<ProductDocument>;
  ProductRating: ResolverTypeWrapper<Omit<ProductRating, 'comments' | 'creator' | 'product'> & { comments: ResolversTypes['ProductRatingCommentConnection'], creator: ResolversTypes['User'], product: ResolversTypes['Product'] }>;
  ProductRatingComment: ResolverTypeWrapper<Omit<ProductRatingComment, 'creator' | 'rating'> & { creator: ResolversTypes['User'], rating: ResolversTypes['ProductRating'] }>;
  ProductRatingCommentConnection: ResolverTypeWrapper<Omit<ProductRatingCommentConnection, 'edges'> & { edges: Array<ResolversTypes['ProductRatingCommentEdge']> }>;
  ProductRatingCommentEdge: ResolverTypeWrapper<Omit<ProductRatingCommentEdge, 'node'> & { node: ResolversTypes['ProductRatingComment'] }>;
  ProductRatingConnection: ResolverTypeWrapper<Omit<ProductRatingConnection, 'edges'> & { edges: Array<ResolversTypes['ProductRatingEdge']> }>;
  ProductRatingEdge: ResolverTypeWrapper<Omit<ProductRatingEdge, 'node'> & { node: ResolversTypes['ProductRating'] }>;
  ProductRatingsSummary: ResolverTypeWrapper<ProductRatingsSummary>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Timestamps: ResolversTypes['ProductRating'] | ResolversTypes['ProductRatingComment'];
  User: ResolverTypeWrapper<UserDocument>;
  UserError: ResolverTypeWrapper<UserError>;
  Vote: ResolverTypeWrapper<VoteDocument>;
  Voteable: ResolversTypes['Brand'] | ResolversTypes['Product'];
  VoteSetAbusivePayload: ResolverTypeWrapper<Omit<VoteSetAbusivePayload, 'voteable'> & { voteable?: Maybe<ResolversTypes['Voteable']> }>;
  VoteSetDownPayload: ResolverTypeWrapper<Omit<VoteSetDownPayload, 'voteable'> & { voteable?: Maybe<ResolversTypes['Voteable']> }>;
  VoteSetUpPayload: ResolverTypeWrapper<Omit<VoteSetUpPayload, 'voteable'> & { voteable?: Maybe<ResolversTypes['Voteable']> }>;
  VotesSummary: ResolverTypeWrapper<VotesSummary>;
  VoteType: VoteType;
  VoteUnsetPayload: ResolverTypeWrapper<Omit<VoteUnsetPayload, 'voteable'> & { voteable?: Maybe<ResolversTypes['Voteable']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Brand: BrandDocument;
  Connection: ResolversParentTypes['ProductRatingCommentConnection'] | ResolversParentTypes['ProductRatingConnection'];
  Contribution: ResolversParentTypes['ProductRating'] | ResolversParentTypes['ProductRatingComment'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DislikeAddPayload: Omit<DislikeAddPayload, 'likable'> & { likable?: Maybe<ResolversParentTypes['Likeable']> };
  DislikeDeletePayload: Omit<DislikeDeletePayload, 'likable'> & { likable?: Maybe<ResolversParentTypes['Likeable']> };
  DisplayableError: ResolversParentTypes['UserError'];
  Edge: ResolversParentTypes['ProductRatingCommentEdge'] | ResolversParentTypes['ProductRatingEdge'];
  Float: Scalars['Float'];
  HTML: Scalars['HTML'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Like: LikeDocument;
  Likeable: ResolversParentTypes['Brand'] | ResolversParentTypes['Product'];
  LikeAddPayload: Omit<LikeAddPayload, 'likable'> & { likable?: Maybe<ResolversParentTypes['Likeable']> };
  LikeDeletePayload: Omit<LikeDeletePayload, 'likable'> & { likable?: Maybe<ResolversParentTypes['Likeable']> };
  LikeSummary: LikeSummary;
  Mutation: {};
  Node: ResolversParentTypes['Brand'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductRating'] | ResolversParentTypes['ProductRatingComment'] | ResolversParentTypes['User'];
  PageInfo: PageInfo;
  Product: ProductDocument;
  ProductRating: Omit<ProductRating, 'comments' | 'creator' | 'product'> & { comments: ResolversParentTypes['ProductRatingCommentConnection'], creator: ResolversParentTypes['User'], product: ResolversParentTypes['Product'] };
  ProductRatingComment: Omit<ProductRatingComment, 'creator' | 'rating'> & { creator: ResolversParentTypes['User'], rating: ResolversParentTypes['ProductRating'] };
  ProductRatingCommentConnection: Omit<ProductRatingCommentConnection, 'edges'> & { edges: Array<ResolversParentTypes['ProductRatingCommentEdge']> };
  ProductRatingCommentEdge: Omit<ProductRatingCommentEdge, 'node'> & { node: ResolversParentTypes['ProductRatingComment'] };
  ProductRatingConnection: Omit<ProductRatingConnection, 'edges'> & { edges: Array<ResolversParentTypes['ProductRatingEdge']> };
  ProductRatingEdge: Omit<ProductRatingEdge, 'node'> & { node: ResolversParentTypes['ProductRating'] };
  ProductRatingsSummary: ProductRatingsSummary;
  Query: {};
  String: Scalars['String'];
  Timestamps: ResolversParentTypes['ProductRating'] | ResolversParentTypes['ProductRatingComment'];
  User: UserDocument;
  UserError: UserError;
  Vote: VoteDocument;
  Voteable: ResolversParentTypes['Brand'] | ResolversParentTypes['Product'];
  VoteSetAbusivePayload: Omit<VoteSetAbusivePayload, 'voteable'> & { voteable?: Maybe<ResolversParentTypes['Voteable']> };
  VoteSetDownPayload: Omit<VoteSetDownPayload, 'voteable'> & { voteable?: Maybe<ResolversParentTypes['Voteable']> };
  VoteSetUpPayload: Omit<VoteSetUpPayload, 'voteable'> & { voteable?: Maybe<ResolversParentTypes['Voteable']> };
  VotesSummary: VotesSummary;
  VoteUnsetPayload: Omit<VoteUnsetPayload, 'voteable'> & { voteable?: Maybe<ResolversParentTypes['Voteable']> };
};

export type BrandResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likeSummary?: Resolver<ResolversTypes['LikeSummary'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  userVote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType>;
  votesSummary?: Resolver<ResolversTypes['VotesSummary'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = {
  __resolveType: TypeResolveFn<'ProductRatingCommentConnection' | 'ProductRatingConnection', ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ContributionResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution']> = {
  __resolveType: TypeResolveFn<'ProductRating' | 'ProductRatingComment', ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DislikeAddPayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['DislikeAddPayload'] = ResolversParentTypes['DislikeAddPayload']> = {
  likable?: Resolver<Maybe<ResolversTypes['Likeable']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DislikeDeletePayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['DislikeDeletePayload'] = ResolversParentTypes['DislikeDeletePayload']> = {
  likable?: Resolver<Maybe<ResolversTypes['Likeable']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DisplayableErrorResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['DisplayableError'] = ResolversParentTypes['DisplayableError']> = {
  __resolveType: TypeResolveFn<'UserError', ParentType, ContextType>;
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EdgeResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = {
  __resolveType: TypeResolveFn<'ProductRatingCommentEdge' | 'ProductRatingEdge', ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Node'], ParentType, ContextType>;
};

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HTML'], any> {
  name: 'HTML';
}

export type LikeResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  type?: Resolver<ResolversTypes['LikeType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeableResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Likeable'] = ResolversParentTypes['Likeable']> = {
  __resolveType: TypeResolveFn<'Brand' | 'Product', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likeSummary?: Resolver<ResolversTypes['LikeSummary'], ParentType, ContextType>;
  userLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
};

export type LikeAddPayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['LikeAddPayload'] = ResolversParentTypes['LikeAddPayload']> = {
  likable?: Resolver<Maybe<ResolversTypes['Likeable']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeDeletePayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['LikeDeletePayload'] = ResolversParentTypes['LikeDeletePayload']> = {
  likable?: Resolver<Maybe<ResolversTypes['Likeable']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeSummaryResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['LikeSummary'] = ResolversParentTypes['LikeSummary']> = {
  countDislikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  dislikeAdd?: Resolver<ResolversTypes['DislikeAddPayload'], ParentType, ContextType, RequireFields<MutationDislikeAddArgs, 'id'>>;
  dislikeDelete?: Resolver<ResolversTypes['DislikeDeletePayload'], ParentType, ContextType, RequireFields<MutationDislikeDeleteArgs, 'id'>>;
  likeAdd?: Resolver<ResolversTypes['LikeAddPayload'], ParentType, ContextType, RequireFields<MutationLikeAddArgs, 'id'>>;
  likeDelete?: Resolver<ResolversTypes['LikeDeletePayload'], ParentType, ContextType, RequireFields<MutationLikeDeleteArgs, 'id'>>;
  voteSetAbusive?: Resolver<ResolversTypes['VoteSetAbusivePayload'], ParentType, ContextType, RequireFields<MutationVoteSetAbusiveArgs, 'id'>>;
  voteSetDown?: Resolver<ResolversTypes['VoteSetDownPayload'], ParentType, ContextType, RequireFields<MutationVoteSetDownArgs, 'id'>>;
  voteSetUp?: Resolver<ResolversTypes['VoteSetUpPayload'], ParentType, ContextType, RequireFields<MutationVoteSetUpArgs, 'id'>>;
  voteUnset?: Resolver<ResolversTypes['VoteUnsetPayload'], ParentType, ContextType, RequireFields<MutationVoteUnsetArgs, 'id'>>;
};

export type NodeResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Brand' | 'Product' | 'ProductRating' | 'ProductRatingComment' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likeSummary?: Resolver<ResolversTypes['LikeSummary'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productRatings?: Resolver<ResolversTypes['ProductRatingConnection'], ParentType, ContextType, RequireFields<ProductProductRatingsArgs, never>>;
  productRatingsSummary?: Resolver<ResolversTypes['ProductRatingsSummary'], ParentType, ContextType>;
  userLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  userVote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType>;
  votesSummary?: Resolver<ResolversTypes['VotesSummary'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRating'] = ResolversParentTypes['ProductRating']> = {
  comments?: Resolver<ResolversTypes['ProductRatingCommentConnection'], ParentType, ContextType, RequireFields<ProductRatingCommentsArgs, never>>;
  cons?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  creatorIsVerifiedBuyer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  pros?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  ratingScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingCommentResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingComment'] = ResolversParentTypes['ProductRatingComment']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['ProductRating'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingCommentConnectionResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingCommentConnection'] = ResolversParentTypes['ProductRatingCommentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductRatingCommentEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingCommentEdgeResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingCommentEdge'] = ResolversParentTypes['ProductRatingCommentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductRatingComment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingConnectionResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingConnection'] = ResolversParentTypes['ProductRatingConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductRatingEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingEdgeResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingEdge'] = ResolversParentTypes['ProductRatingEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductRating'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRatingsSummaryResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['ProductRatingsSummary'] = ResolversParentTypes['ProductRatingsSummary']> = {
  averageRating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalRatings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryBrandArgs, 'id'>>;
  brands?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productRating?: Resolver<Maybe<ResolversTypes['ProductRating']>, ParentType, ContextType, RequireFields<QueryProductRatingArgs, 'id'>>;
  productRatingComment?: Resolver<Maybe<ResolversTypes['ProductRatingComment']>, ParentType, ContextType, RequireFields<QueryProductRatingCommentArgs, 'id'>>;
  productRatingComments?: Resolver<ResolversTypes['ProductRatingCommentConnection'], ParentType, ContextType, RequireFields<QueryProductRatingCommentsArgs, never>>;
  productRatings?: Resolver<ResolversTypes['ProductRatingConnection'], ParentType, ContextType, RequireFields<QueryProductRatingsArgs, never>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type TimestampsResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Timestamps'] = ResolversParentTypes['Timestamps']> = {
  __resolveType: TypeResolveFn<'ProductRating' | 'ProductRatingComment', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  dislikedBrands?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  dislikedProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likedBrands?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  likedProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productRatingComments?: Resolver<ResolversTypes['ProductRatingCommentConnection'], ParentType, ContextType, RequireFields<UserProductRatingCommentsArgs, never>>;
  productRatings?: Resolver<ResolversTypes['ProductRatingConnection'], ParentType, ContextType, RequireFields<UserProductRatingsArgs, never>>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  type?: Resolver<ResolversTypes['VoteType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteableResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['Voteable'] = ResolversParentTypes['Voteable']> = {
  __resolveType: TypeResolveFn<'Brand' | 'Product', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userVote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType>;
  votesSummary?: Resolver<ResolversTypes['VotesSummary'], ParentType, ContextType>;
};

export type VoteSetAbusivePayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['VoteSetAbusivePayload'] = ResolversParentTypes['VoteSetAbusivePayload']> = {
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  voteable?: Resolver<Maybe<ResolversTypes['Voteable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteSetDownPayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['VoteSetDownPayload'] = ResolversParentTypes['VoteSetDownPayload']> = {
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  voteable?: Resolver<Maybe<ResolversTypes['Voteable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteSetUpPayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['VoteSetUpPayload'] = ResolversParentTypes['VoteSetUpPayload']> = {
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  voteable?: Resolver<Maybe<ResolversTypes['Voteable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VotesSummaryResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['VotesSummary'] = ResolversParentTypes['VotesSummary']> = {
  countAbusive?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countDown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countUp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteUnsetPayloadResolvers<ContextType = GraphQLCustomResolversContext, ParentType extends ResolversParentTypes['VoteUnsetPayload'] = ResolversParentTypes['VoteUnsetPayload']> = {
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  voteable?: Resolver<Maybe<ResolversTypes['Voteable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLCustomResolversContext> = {
  Brand?: BrandResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DislikeAddPayload?: DislikeAddPayloadResolvers<ContextType>;
  DislikeDeletePayload?: DislikeDeletePayloadResolvers<ContextType>;
  DisplayableError?: DisplayableErrorResolvers<ContextType>;
  Edge?: EdgeResolvers<ContextType>;
  HTML?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  Likeable?: LikeableResolvers<ContextType>;
  LikeAddPayload?: LikeAddPayloadResolvers<ContextType>;
  LikeDeletePayload?: LikeDeletePayloadResolvers<ContextType>;
  LikeSummary?: LikeSummaryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductRating?: ProductRatingResolvers<ContextType>;
  ProductRatingComment?: ProductRatingCommentResolvers<ContextType>;
  ProductRatingCommentConnection?: ProductRatingCommentConnectionResolvers<ContextType>;
  ProductRatingCommentEdge?: ProductRatingCommentEdgeResolvers<ContextType>;
  ProductRatingConnection?: ProductRatingConnectionResolvers<ContextType>;
  ProductRatingEdge?: ProductRatingEdgeResolvers<ContextType>;
  ProductRatingsSummary?: ProductRatingsSummaryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Timestamps?: TimestampsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  Voteable?: VoteableResolvers<ContextType>;
  VoteSetAbusivePayload?: VoteSetAbusivePayloadResolvers<ContextType>;
  VoteSetDownPayload?: VoteSetDownPayloadResolvers<ContextType>;
  VoteSetUpPayload?: VoteSetUpPayloadResolvers<ContextType>;
  VotesSummary?: VotesSummaryResolvers<ContextType>;
  VoteUnsetPayload?: VoteUnsetPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GraphQLCustomResolversContext> = Resolvers<ContextType>;
