/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n": types.GetBrandDocument,
    "\n  query GetProducts {\n    products {\n      id\n      ...ProductLink_Product\n    }\n    brands {\n      id\n      ...BrandLink_Brand\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n": types.GetProductDocument,
    "\n  fragment BrandLink_Brand on Brand {\n    name\n    ...useBrandUrl_Brand\n  }\n": types.BrandLink_BrandFragmentDoc,
    "\n  fragment LikeDislikeActions_Likeable on Likeable {\n    id\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n    }\n  }\n": types.LikeDislikeActions_LikeableFragmentDoc,
    "\n  mutation LikeAdd($id: ID!) {\n    likeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n": types.LikeAddDocument,
    "\n  mutation LikeDelete($id: ID!) {\n    likeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n": types.LikeDeleteDocument,
    "\n  mutation DislikeAdd($id: ID!) {\n    dislikeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n": types.DislikeAddDocument,
    "\n  mutation DislikeDelete($id: ID!) {\n    dislikeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n": types.DislikeDeleteDocument,
    "\n  fragment LikeableInfo_Likeable on Likeable {\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n": types.LikeableInfo_LikeableFragmentDoc,
    "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n": types.ProductLink_ProductFragmentDoc,
    "\n  fragment useBrandUrl_Brand on Brand {\n    id\n  }\n": types.UseBrandUrl_BrandFragmentDoc,
    "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n": types.UseProductUrl_ProductFragmentDoc,
};

export function graphql(source: "\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n"): (typeof documents)["\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n"];
export function graphql(source: "\n  query GetProducts {\n    products {\n      id\n      ...ProductLink_Product\n    }\n    brands {\n      id\n      ...BrandLink_Brand\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products {\n      id\n      ...ProductLink_Product\n    }\n    brands {\n      id\n      ...BrandLink_Brand\n    }\n  }\n"];
export function graphql(source: "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      ...LikeableInfo_Likeable\n      ...LikeDislikeActions_Likeable\n    }\n  }\n"];
export function graphql(source: "\n  fragment BrandLink_Brand on Brand {\n    name\n    ...useBrandUrl_Brand\n  }\n"): (typeof documents)["\n  fragment BrandLink_Brand on Brand {\n    name\n    ...useBrandUrl_Brand\n  }\n"];
export function graphql(source: "\n  fragment LikeDislikeActions_Likeable on Likeable {\n    id\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n    }\n  }\n"): (typeof documents)["\n  fragment LikeDislikeActions_Likeable on Likeable {\n    id\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n    }\n  }\n"];
export function graphql(source: "\n  mutation LikeAdd($id: ID!) {\n    likeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LikeAdd($id: ID!) {\n    likeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation LikeDelete($id: ID!) {\n    likeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LikeDelete($id: ID!) {\n    likeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation DislikeAdd($id: ID!) {\n    dislikeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DislikeAdd($id: ID!) {\n    dislikeAdd(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation DislikeDelete($id: ID!) {\n    dislikeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DislikeDelete($id: ID!) {\n    dislikeDelete(id: $id) {\n      likable {\n        ...LikeDislikeActions_Likeable\n      }\n    }\n  }\n"];
export function graphql(source: "\n  fragment LikeableInfo_Likeable on Likeable {\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment LikeableInfo_Likeable on Likeable {\n    likeSummary {\n      countLikes\n      countDislikes\n    }\n    userLike {\n      type\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"];
export function graphql(source: "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"): (typeof documents)["\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"];
export function graphql(source: "\n  fragment useBrandUrl_Brand on Brand {\n    id\n  }\n"): (typeof documents)["\n  fragment useBrandUrl_Brand on Brand {\n    id\n  }\n"];
export function graphql(source: "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"): (typeof documents)["\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;