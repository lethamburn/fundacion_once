const express = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/user.controller");
const { isAuth } = require("../../middlewares/auth");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getUsers);
UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);

module.exports = UserRouter;
