const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    cover: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("album", AlbumSchema);

module.exports = Album;
