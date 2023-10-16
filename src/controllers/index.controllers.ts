import { Service, Container } from "typedi";
import { Request, Response } from "express";
import { BadRequestException } from "../exceptions";
import "reflect-metadata";
import UserService from "../services/index.services";

@Service()
export default class UserController {
  static userService = Container.get(UserService);

  async getData(req: Request, res: Response) {
    try {
      const data = await UserController.userService.getUserData();
      return res.json(data);
    } catch (e) {
      const err = new BadRequestException("Bad Request");
      console.log(err.message);
      return res.status(err.status).json(err.message);
    }
  }
}
