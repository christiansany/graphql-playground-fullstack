import { BrandDocument, BrandDocumentIndex } from "./brand.types";

const table = "brand";

export const brands: BrandDocument[] = [
  {
    id: `${table}:1`,
    name: "Apple",
  },
  {
    id: `${table}:2`,
    name: "Microsoft",
  },
];

export const brandIndex = () =>
  brands.reduce<BrandDocumentIndex>((acc, brand) => {
    acc[brand.id] = brand;
    return acc;
  }, {});
