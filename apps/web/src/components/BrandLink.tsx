import Link from "next/link";
import { FunctionComponent } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";
import { useBrandUrl } from "./useBrandUrl";

const BrandLink_Brand = graphql(`
  fragment BrandLink_Brand on Brand {
    name
    ...useBrandUrl_Brand
  }
`);

interface BrandLinkProps {
  brand: FragmentType<typeof BrandLink_Brand>;
}

export const BrandLink: FunctionComponent<BrandLinkProps> = ({
  brand: brandData,
}) => {
  const brand = getFragmentData(BrandLink_Brand, brandData);
  const brandUrl = useBrandUrl(brand);
  return (
    <Link href={brandUrl}>
      <a>{brand.name}</a>
    </Link>
  );
};
