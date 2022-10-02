import { DataSource } from "apollo-datasource";
import { brandIndex } from "./brand.data";
import { BrandDocument } from "./brand.types";

export default class BrandsAPI extends DataSource {
  public async getById(id: string): Promise<BrandDocument | null> {
    return brandIndex()[id] || null;
  }
}
