const Album = require("../models/album.model");
const { deleteImgCloudinary } = require("../../middlewares/file.middleware");

const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    return res.status(404).json("Albums not found", error);
  }
};

const createAlbum = async (req, res) => {
  try {
    const newAlbum = new Album({
      ...req.body,
      cover: req.file ? req.file.path : "https://iili.io/HlHy9Yx.png",
    });
    await newAlbum.save();
    return res.status(201).json(newAlbum);
  } catch (error) {
    return res.status(500).json("Album creation failed", error);
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndDelete(id);
    if (album.cover) {
      deleteImgCloudinary(album.cover);
    }
    return res.status(200).json("Album deleted!");
  } catch (error) {
    return res.status(500).json("Album deletion failed", error);
  }
};

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const updateAlbum = await Album.findByIdAndUpdate(id, {
      ...req.body,
      cover: req.file ? req.file.path : "https://iili.io/HlHy9Yx.png",
      _id: id,
    });
    return res.status(200).json(updateAlbum);
  } catch (error) {
    return res.status(500).json("Failed updating album", error);
  }
};

module.exports = { getAlbums, createAlbum, deleteAlbum, updateAlbum };
