const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  alterEgo: { type: String, required: false, trim: true },
  superpowers: [{ type: String, required: false }],
});

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;
