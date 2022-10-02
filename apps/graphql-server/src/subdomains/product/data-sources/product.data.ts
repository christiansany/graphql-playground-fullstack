import { ProductDocument, ProductDocumentIndex } from "./product.types";

const table = "product";

export const products: ProductDocument[] = [
  {
    id: `${table}:1`,
    name: "iPhone 11",
    description: "Description iPhone 11",
    price: 699.0,
  },
  {
    id: `${table}:2`,
    name: "iPhone 12",
    description: "Description iPhone 12",
    price: 799.0,
  },
  {
    id: `${table}:3`,
    name: "iPhone 13",
    description: "Description iPhone 13",
    price: 899.0,
  },
  {
    id: `${table}:4`,
    name: "iPhone 14",
    description: "Description iPhone 14",
    price: 999.0,
  },
];

export const productIndex = () =>
  products.reduce<ProductDocumentIndex>((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {});
