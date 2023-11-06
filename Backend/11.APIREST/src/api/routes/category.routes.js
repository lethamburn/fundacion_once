const express = require("express");
const {
  getCategories,
  getCategoryByID,
  createCategory,
} = require("../controllers/category.controller");

const CategoryRouter = express.Router();

CategoryRouter.get("/", getCategories);
CategoryRouter.get("/:id", getCategoryByID);
CategoryRouter.post("/", createCategory);

module.exports = CategoryRouter;
