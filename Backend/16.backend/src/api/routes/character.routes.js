const express = require("express");
const {
  getAllCharacters,
  getCharacterByID,
  getCharacterByName,
  createCharacter,
  deleteCharacter,
  updateCharacter,
} = require("../controllers/character.controller");
const isAuth = require("../../middlewares/auth.middleware");

const CharacterRouter = express.Router();

CharacterRouter.get("/", getAllCharacters);
CharacterRouter.get("/id/:id", getCharacterByID);
CharacterRouter.get("/name/:name", getCharacterByName);
CharacterRouter.post("/", [isAuth], createCharacter);
CharacterRouter.delete("/:id", [isAuth], deleteCharacter);
CharacterRouter.patch("/:id", [isAuth], updateCharacter);

module.exports = CharacterRouter;
