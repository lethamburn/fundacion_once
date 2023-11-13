const express = require("express");
const {
  getAllMovies,
  getMovieByID,
  getMovieByName,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");

const MovieRouter = express.Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.get("/id/:id", getMovieByID);
MovieRouter.get("/name/:name", getMovieByName);
MovieRouter.post("/", createMovie);
MovieRouter.delete("/:id", deleteMovie);
MovieRouter.patch("/:id", updateMovie);

module.exports = MovieRouter;
