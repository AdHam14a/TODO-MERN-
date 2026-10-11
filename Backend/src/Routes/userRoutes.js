import express from "express";
import {
  deleteUsers,
  getMe,
  getUsers,
  login,
  register,
} from "../Controllers/authControllers.js";

const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);
Router.get("/users", getUsers);
Router.delete("/users/:id", deleteUsers);
Router.get("/me", getMe);

export default Router;
