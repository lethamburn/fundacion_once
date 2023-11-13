const express = require("express");
const {
  getAllCharacters,
  getCharacterByID,
  getCharacterByName,
  createCharacter,
  deleteCharacter,
  updateCharacter,
} = require("../controllers/character.controller");

const CharacterRouter = express.Router();

CharacterRouter.get("/", getAllCharacters);
CharacterRouter.get("/id/:id", getCharacterByID);
CharacterRouter.get("/name/:name", getCharacterByName);
CharacterRouter.post("/", createCharacter);
CharacterRouter.delete("/:id", deleteCharacter);
CharacterRouter.patch("/:id", updateCharacter);

module.exports = CharacterRouter;
