const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const register = async (req, res, next) => {
  try {
    const user = new User({
      ...req.body,
      avatar: req.file
        ? req.file.path
        : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    });
    await user.save();
    user.password = null;
    return res.status(201).json(user);
  } catch (error) {
    return next(new Error("Error registering user"));
  }
};

const login = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (!existingUser) {
      return next(new Error("Username already exists"));
    }
    if (bcrypt.compareSync(req.body.password, existingUser.password)) {
      const token = generateToken(existingUser._id, existingUser.username);
      return res.status(200).json({
        username: existingUser.username,
        id: existingUser._id,
        avatar: existingUser.avatar,
        token: token,
      });
    } else {
      return next(new Error("Password incorrect"));
    }
  } catch (error) {
    return next(new Error("Failed login"));
  }
};

module.exports = { login, register };
