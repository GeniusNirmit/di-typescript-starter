import { Service } from "typedi";
import data from "../models/user.models";
import "reflect-metadata";

@Service()
export default class UserRepository {
  private data: data = {
    firstName: "Nirmit",
    lastName: "Pandya",
  };

  async getAllUsers() {
    const data = this.data;
    return data;
  }
}
