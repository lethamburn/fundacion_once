const Category = require("../models/category.model");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("products");
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(404).json("Categories not found", error);
  }
};

const getCategoryByID = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate("products");
    return res.status(200).json(category);
  } catch (error) {
    return res.status(404).json("Category not found", error);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json("Failed creating category", error);
  }
};

module.exports = { getCategories, getCategoryByID, createCategory };
