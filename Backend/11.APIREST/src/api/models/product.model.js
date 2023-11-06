const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    photo: {
      type: String,
      required: true,
      default:
        "https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
    },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    type: { type: String, enum: ["videogame", "laptop", "phone"] },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
