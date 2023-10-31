//Importamos express
const express = require("express");
//Importamos dotenv y lo configuramos
const dotenv = require("dotenv");
dotenv.config();
//Importamos la función connect
const connect = require("./utils/db");
//Importamos el modelo Comic
const Comic = require("./models/comic.model");

//Creamos el servidor
const server = express();
//Configuramos la información del servidor:
//La primera linea configura que la información que vamos a recibir y vamos a enviar a la DB es json
server.use(express.json());
//De esta forma vamos a decodificar las urls de las peticiones
server.use(express.urlencoded({ extended: false }));
//Nos conectamos a la base de datos
connect();

//Creamos el router
const router = express.Router();

//Routes
//Ruta para crear un nuevo comic
router.post("/create", async (req, res) => {
  try {
    //Creamos el comic en base al modelo
    const newComic = new Comic(req.body);
    console.log(newComic);
    //Lo guardamos en la base de datos
    await newComic.save();
    //Vamos a devolver una respuesta en el servidor
    return res.status(201).json(newComic);
  } catch (error) {
    return res.status(400).json("Error creating comic");
  }
});
//Ruta para obtener los comics
router.get("/comics", async (req, res) => {
  try {
    const comics = await Comic.find();
    return res.status(200).json(comics);
  } catch (error) {
    return res.status(404).json("Comics not found");
  }
});

//El servidor usa las rutas
server.use("/", router);

//Recuperamos el puerto
const PORT = process.env.PORT;

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
