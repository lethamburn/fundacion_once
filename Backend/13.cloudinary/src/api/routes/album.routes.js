const express = require("express");
const {
  getAlbums,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require("../controllers/album.controller");
const { upload } = require("../../middlewares/file.middleware");

const AlbumRouter = express.Router();

AlbumRouter.get("/", getAlbums);
AlbumRouter.post("/", upload.single("cover"), createAlbum);
AlbumRouter.delete("/:id", upload.single("cover"), deleteAlbum);
AlbumRouter.patch("/:id", upload.single("cover"), updateAlbum);

module.exports = AlbumRouter;
