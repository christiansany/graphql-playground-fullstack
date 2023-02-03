import Link from "next/link";
import { FunctionComponent } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";
import { useProductUrl } from "./useProductUrl";

const ProductLink_Product = graphql(`
  fragment ProductLink_Product on Product {
    name
    ...useProductUrl_Product
  }
`);

interface ProductLinkProps {
  product: FragmentType<typeof ProductLink_Product>;
}

export const ProductLink: FunctionComponent<ProductLinkProps> = ({
  product: productData,
}) => {
  const product = getFragmentData(ProductLink_Product, productData);
  const productUrl = useProductUrl(product);
  return (
    <Link href={productUrl}>
      <a>{product.name}</a>
    </Link>
  );
};
