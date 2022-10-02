import { DataSource } from "apollo-datasource";
import { userIndex } from "./user.data";
import { UserDocument } from "./user.types";

export default class UsersAPI extends DataSource {
  public async getById(id: string): Promise<UserDocument | null> {
    return userIndex()[id] || null;
  }
}
