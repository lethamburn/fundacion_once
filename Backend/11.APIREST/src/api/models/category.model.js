const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, enum: ["videogame", "laptop", "phone"] },
    available: { type: Boolean },
    products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
