const Movie = require("../models/movie.model");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate("characters");
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(404).json("Movies not found", error);
  }
};

const getMovieByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate("characters");
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(404).json("Movie not found", error);
  }
};

const getMovieByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const movie = await Movie.findOne({ title: name }).populate("characters");
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(404).json("Movie not found", error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json("Failed creating movie", error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    return res.status(200).json("Deleted movie");
  } catch (error) {
    return res.status(500).json("Error deleting movie", error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMovie = new Movie(req.body);
    newMovie._id = id;
    await Movie.findByIdAndUpdate(id, newMovie);
    return res.status(200).json("Movie updated");
  } catch (error) {
    return res.status(500).json("Error updating movie", error);
  }
};

module.exports = {
  getAllMovies,
  getMovieByID,
  getMovieByName,
  createMovie,
  updateMovie,
  deleteMovie,
};
