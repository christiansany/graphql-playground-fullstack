// import {
//   Maybe,
//   ProductCreatePayload,
//   ProductUpdatePayload,
// } from "__generated__/schema.generated";
// import { SourceConnection } from "../../generic/types";

export interface ProductDocument {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductDocumentIndex {
  [key: string]: ProductDocument;
}

// export type SourceProductConnection = SourceConnection<ProductDocument>;

// export interface SourceProductCreatePayload
//   extends Omit<ProductCreatePayload, "product"> {
//   product?: Maybe<ProductDocument> | undefined;
// }

// export interface SourceProductUpdatePayload
//   extends Omit<ProductUpdatePayload, "product"> {
//   product?: Maybe<ProductDocument> | undefined;
// }
