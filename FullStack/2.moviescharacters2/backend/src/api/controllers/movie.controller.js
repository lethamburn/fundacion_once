const Movie = require("../models/movie.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate("characters");
    return res.status(200).json(movies);
  } catch (error) {
    return next(new Error("Movies not found"));
  }
};

const getMovieByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate("characters");
    return res.status(200).json(movie);
  } catch (error) {
    return next(new Error("Movie not found"));
  }
};

const getMovieByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const movie = await Movie.findOne({ title: name }).populate("characters");
    return res.status(200).json(movie);
  } catch (error) {
    return next(new Error("Movie not found"));
  }
};

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      ...req.body,
      cover: req.file
        ? req.file.path
        : "https://murphys-movies.vercel.app/movie-poster-placeholder.svg",
    });

    await newMovie.save();
    return res.status(201).json(newMovie);
  } catch (error) {
    return next(new Error("Movie cannot be created"));
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actualMovie = await Movie.findById(id);
    deleteImgCloudinary(actualMovie.cover);
    await Movie.findByIdAndDelete(id);
    return res.status(200).json("Deleted movie");
  } catch (error) {
    return next(new Error("Movie cannot be deleted"));
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMovie = new Movie(req.body);
    newMovie._id = id;
    await Movie.findByIdAndUpdate(
      id,
      {
        ...req.body,
        cover: req.file
          ? req.file.path
          : "https://murphys-movies.vercel.app/movie-poster-placeholder.svg",
      },
      { new: true }
    );
    return res.status(200).json("Movie updated");
  } catch (error) {
    return next(new Error("Movie cannot be updated"));
  }
};

const addCharacter = async (req, res, next) => {
  try {
    const { movieID } = req.body;
    const { characterID } = req.body;
    await Movie.findByIdAndUpdate(
      movieID,
      { $push: { characters: characterID } },
      { new: true }
    );
    return res.status(200).json("Character added");
  } catch (error) {
    return next(new Error("Character cannot be added"));
  }
};

module.exports = {
  getAllMovies,
  getMovieByID,
  getMovieByName,
  createMovie,
  updateMovie,
  deleteMovie,
  addCharacter,
};
