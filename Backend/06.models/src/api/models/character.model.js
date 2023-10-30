const mongoose = require("mongoose");

//Creamos un nuevo Schema
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    location: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

//Creamos el modelo con su identificador "character" y el esquema
const Character = mongoose.model("character", CharacterSchema);
//Lo exportamos
module.exports = Character;
