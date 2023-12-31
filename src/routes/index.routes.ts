import express from "express";
const router = express.Router();
import UserController from "../controllers/index.controllers";
import { Container } from "typedi";

const userController = Container.get(UserController);

router.get("/userData", userController.getData);

export default router;
