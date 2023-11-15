const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    cover: { type: String, required: true },
    characters: [{ type: mongoose.Types.ObjectId, ref: "character" }],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
