import { DataSource } from "apollo-datasource";
import { productIndex } from "./product.data";
import { ProductDocument } from "./product.types";

export default class ProductsAPI extends DataSource {
  public async getById(id: string): Promise<ProductDocument | null> {
    return productIndex()[id] || null;
  }
}
