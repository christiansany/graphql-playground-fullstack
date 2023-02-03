import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";

const useBrandUrl_Brand = graphql(`
  fragment useBrandUrl_Brand on Brand {
    id
  }
`);

export const useBrandUrl = (
  brandData: FragmentType<typeof useBrandUrl_Brand>
) => {
  const brand = getFragmentData(useBrandUrl_Brand, brandData);
  return `/brand/${encodeURIComponent(brand.id)}`;
};
