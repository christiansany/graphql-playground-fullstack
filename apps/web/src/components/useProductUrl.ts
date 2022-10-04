import { FragmentType, graphql, useFragment } from "../../__generated__/gql";

const useProductUrl_Product = graphql(`
  fragment useProductUrl_Product on Product {
    id
  }
`);

export const useProductUrl = (
  productData: FragmentType<typeof useProductUrl_Product>
) => {
  const product = useFragment(useProductUrl_Product, productData);
  return `/product/${encodeURIComponent(product.id)}`;
};
