//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getProducts,
  getProductByID,
  getProductByName,
  deleteProduct,
  createProduct,
  updateProduct,
  changePlaceholder,
} = require("../controllers/product.controller");

//Creamos el router
const ProductRouter = express.Router();
//Definimos las rutas
ProductRouter.get("/", getProducts);
ProductRouter.get("/byid/:id", getProductByID);
ProductRouter.get("/byname/:name", getProductByName);
ProductRouter.post("/", createProduct);
ProductRouter.patch("/:id", updateProduct);
ProductRouter.patch("/placeholder/:id", changePlaceholder);
ProductRouter.delete("/:id", deleteProduct);

module.exports = ProductRouter;
