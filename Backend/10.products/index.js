//https://www.mongodb.com/docs/manual/reference/method/js-collection/

//Importaciones
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./utils/db");
const Product = require("./models/product.model");
const Stock = require("./models/stock.model");

//Server
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Connect DB
connect();

//Router
const router = express.Router();

//Routes
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json("Products not found", error);
  }
});

router.get("/stock", async (req, res) => {
  try {
    //Con populate, populamos la propiedad products para que transforme los id's de productos en los productos enteros
    const stock = await Stock.find().populate("products");
    return res.status(200).json(stock);
  } catch (error) {
    return res.status(404).json("Stock not found", error);
  }
});

router.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json("Failed creating product", error);
  }
});

router.post("/stock", async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    await newStock.save();
    return res.status(201).json(newStock);
  } catch (error) {
    return res.status(500).json("Failed creating stock", error);
  }
});
//FIND BY NAME
router.get("/videogames", async (req, res) => {
  try {
    const stock = await Stock.findOne({ name: "Videojuegos" }).populate(
      "products"
    );
    return res.status(200).json(stock);
  } catch (error) {
    return res.status(404).json("Stock not found", error);
  }
});
//FIND BY NAME QUERY
router.get("/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const stock = await Stock.findOne({ name: name }).populate("products");
    return res.status(200).json(stock);
  } catch (error) {
    return res.status(404).json("Stock not found", error);
  }
});
//MAS DE 20
router.get("/products/optimum", async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $gt: 20 } });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json("Products not found");
  }
});
//ORDENADO POR CALIDAD
router.get("/products/ordered", async (req, res) => {
  try {
    const products = await Product.find().sort({ quality: -1 });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json("Products not found");
  }
});

//Usamos las rutas
server.use("/", router);

//Recuperamos el puerto
const PORT = process.env.PORT;

//Listen
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
