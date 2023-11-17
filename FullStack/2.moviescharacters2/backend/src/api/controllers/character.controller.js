const Character = require("../models/character.model");

const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(new Error("Characters not found"));
  }
};

const getCharacterByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);
    return res.status(200).json(character);
  } catch (error) {
    return next(new Error("Character not found"));
  }
};

const getCharacterByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const character = await Character.findOne({ name: name });
    return res.status(200).json(character);
  } catch (error) {
    return next(new Error("Character not found"));
  }
};

const createCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    return res.status(201).json(newCharacter);
  } catch (error) {
    return next(new Error("Failed creating character"));
  }
};

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    return res.status(200).json("Deleted character");
  } catch (error) {
    return next(new Error("Failed deleting character"));
  }
};

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCharacter = new Character(req.body);
    newCharacter._id = id;
    await Character.findByIdAndUpdate(id, newCharacter);
    return res.status(200).json("Character updated");
  } catch (error) {
    return next(new Error("Character cannot be updated"));
  }
};

module.exports = {
  getAllCharacters,
  getCharacterByID,
  getCharacterByName,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
