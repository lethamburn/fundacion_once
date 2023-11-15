const express = require("express");
const { login, register } = require("../controllers/user.controller");
const { upload } = require("../../middlewares/files.middleware");

const UserRouter = express.Router();

UserRouter.post("/register", upload.single("avatar"), register);
UserRouter.post("/login", login);

module.exports = UserRouter;
