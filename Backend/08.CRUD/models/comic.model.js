//Importamos mongoose
const mongoose = require("mongoose");

//Creamos un nuevo schema
const ComicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, enum: ["Marvel", "DC"], required: true },
    cover: { type: String, required: true },
    year: { type: Number, required: false },
    released: { type: Boolean, default: false },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Creamos el modelo
const Comic = mongoose.model("comic", ComicSchema);

module.exports = Comic;
