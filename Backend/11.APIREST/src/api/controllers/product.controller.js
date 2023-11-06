//Importamos el modelo
const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json("Products not found", error);
  }
};

const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json("Product not found", error);
  }
};

const getProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name: name });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json("Product not found", error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json("Failed creating Product", error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.status(200).json("Product deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting product");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const newProduct = new Product(req.body);
    newProduct._id = id;
    await Product.findByIdAndUpdate(id, newProduct);
    return res.status(200).json("Edited product");
  } catch (error) {
    return res.status(500).json("Failed editing product", error);
  }
};

const changePlaceholder = async (req, res) => {
  try {
    const { id } = req.params;
    const newProduct = new Product({
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqVo5-PL__WgOgNsQ7Gk_7cQy62R86AJEewof590Nkg&s",
    });
    newProduct._id = id;
    await Product.findByIdAndUpdate(id, newProduct);
    return res.status(200).json("Placeholder added");
  } catch (error) {
    return res.status(500).json("Failed placeholder");
  }
};

module.exports = {
  getProducts,
  getProductByID,
  getProductByName,
  deleteProduct,
  createProduct,
  updateProduct,
  changePlaceholder,
};
