const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false },
    available: { type: Boolean, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("stock", StockSchema);

module.exports = Stock;
