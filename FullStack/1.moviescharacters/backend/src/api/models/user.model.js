const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Username 3 characters minimum"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "Password 8 characters minimum"],
    },
    avatar: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
