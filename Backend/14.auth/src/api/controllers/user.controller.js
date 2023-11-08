const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const existingUser = await User.findOne({ email: newUser.email });
    if (existingUser) {
      return next(new Error("Email already in use"));
    }
    await newUser.save();
    //Opcionalmente nullear la contraseña del usuario una vez guardada
    newUser.password = null;
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new Error("Email not valid"));
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.email);
      return res.status(200).json({
        user: user.email,
        token: token,
      });
    } else{
      return next(new Error("Password not valid"))
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { getUsers, loginUser, registerUser };
