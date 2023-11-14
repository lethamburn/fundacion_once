const express = require("express");
const {
  getAllMovies,
  getMovieByID,
  getMovieByName,
  createMovie,
  updateMovie,
  deleteMovie,
  addCharacter,
} = require("../controllers/movie.controller");
const { upload } = require("../../middlewares/files.middleware");
const isAuth = require("../../middlewares/auth.middleware");

const MovieRouter = express.Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.get("/id/:id", getMovieByID);
MovieRouter.get("/name/:name", getMovieByName);
MovieRouter.post("/", [isAuth], upload.single("cover"), createMovie);
MovieRouter.delete("/:id", [isAuth], deleteMovie);
MovieRouter.patch("/:id", [isAuth], upload.single("cover"), updateMovie);
MovieRouter.put("/add-character", [isAuth], addCharacter);

module.exports = MovieRouter;
