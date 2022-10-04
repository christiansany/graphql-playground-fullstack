import { FragmentType, graphql, useFragment } from "../../__generated__/gql";

const useBrandUrl_Brand = graphql(`
  fragment useBrandUrl_Brand on Brand {
    id
  }
`);

export const useBrandUrl = (
  brandData: FragmentType<typeof useBrandUrl_Brand>
) => {
  const brand = useFragment(useBrandUrl_Brand, brandData);
  return `/brand/${encodeURIComponent(brand.id)}`;
};
