import express from "express";
import { deleteUsers, getUsers, login, register } from "../Controllers/authControllers.js";

const Router = express.Router();

Router.post("/register",register);
Router.post("/login",login);
Router.get("/users",getUsers);
Router.delete("/users/:id",deleteUsers);

export default Router;