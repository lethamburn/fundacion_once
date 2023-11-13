const Character = require("../models/character.model");

const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(404).json("Characters not found", error);
  }
};

const getCharacterByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);
    return res.status(200).json(character);
  } catch (error) {
    return res.status(404).json("Character not found", error);
  }
};

const getCharacterByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const character = await Character.findOne({ name: name });
    return res.status(200).json(character);
  } catch (error) {
    return res.status(404).json("Character not found", error);
  }
};

const createCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    return res.status(201).json(newCharacter);
  } catch (error) {
    return res.status(500).json("Failed creating character", error);
  }
};

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    return res.status(200).json("Deleted character");
  } catch (error) {
    return res.status(500).json("Error deleting character", error);
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
    return res.status(500).json("Error updating character", error);
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
