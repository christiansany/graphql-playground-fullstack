import UsersAPI from "../subdomains/user/data-sources/user";
import DataLoaders from "../subdomains/dataLoaders";
import ProductsAPI from "../subdomains/product/data-sources/product";
import BrandsAPI from "../subdomains/brand/data-sources/brand";
import LikeableAPI from "../subdomains/like/data-sources/like";
import VoteableAPI from "../subdomains/vote/data-sources/vote";

export interface GraphQLCustomDataSources {
  User: UsersAPI;
  Product: ProductsAPI;
  Brand: BrandsAPI;
  Likeable: LikeableAPI;
  Voteable: VoteableAPI;
}

export interface GraphQLCustomContext {
  dataLoaders: DataLoaders;
}

export interface GraphQLCustomResolversContext extends GraphQLCustomContext {
  userId?: string;
  dataSources: GraphQLCustomDataSources;
}
