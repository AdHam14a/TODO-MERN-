import express from "express";
import {
  deleteUsers,
  getMe,
  getUsers,
  login,
  register,
} from "../Controllers/authControllers.js";
import protectRoute from "../Middlewares/authMiddleware.js";

const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);
Router.get("/users", protectRoute, getUsers);
Router.delete("/users/:id", protectRoute, deleteUsers);
Router.get("/me", protectRoute, getMe);

export default Router;
