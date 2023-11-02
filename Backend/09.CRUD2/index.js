//Importamos express
const express = require("express");
//Importamos y configuramos dotenv
const dotenv = require("dotenv");
dotenv.config();
//Importamos la funcion connect
const connect = require("./utils/db");
//Importamos el modelo Dog
const Dog = require("./models/dog.model");

//Creamos el servidor
const server = express();
//Nos conectamos a la base de datos
connect();

//Para que nuestra información entre y salga correctamente de la base de datos, tenemos que parsear tanto el formato (JSON) como el medio (URL)
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Creamos el router
const router = express.Router();

//Implementamos las diferentes rutas
//GET ALL DOGS
router.get("/dogs", async (req, res) => {
  try {
    //Almacenamos en una constante todos los perros de la base de datos, para encontrarlos utilizaremos el metodo find de mongo
    const dogs = await Dog.find();
    //Definimos la respuesta del servidor indicandole el status y el contenido
    return res.status(200).json(dogs);
  } catch (error) {
    return res.status(400).json("Dogs not found");
  }
});
//GET DOG BY ID
router.get("/dogs/:id", async (req, res) => {
  try {
    //Recuperamos el param id para saber que hemos puesto detrás de la barra
    const { id } = req.params;
    //Busco con mongo el objeto con ese id
    const dog = await Dog.findById(id);
    //Retornamos la respuesta
    return res.status(200).json(dog);
  } catch (error) {
    return res.status(404).json("Dog not found");
  }
});

//CREATE DOG
router.post("/dogs", async (req, res) => {
  try {
    //Creas un perro
    const newDog = new Dog(req.body);
    //Lo guardamos en la base de datos
    await newDog.save();
    //Devolvemos una respuesta del servidor
    return res.status(201).json(newDog);
  } catch (error) {
    return res.status(500).json("Error creating dog");
  }
});
//DELETE DOG
router.delete("/dogs/:id", async (req, res) => {
  try {
    //Sacamos el id de los params
    const { id } = req.params;
    //Con el metodo de mongo borramos el objeto
    await Dog.findByIdAndDelete(id);
    //Retornamos una respuesta
    return res.status(200).json("Dog deleted");
  } catch (error) {
    return res.status(500).json("Error deleting dog");
  }
});
//UPDATE DOG
router.patch("/dogs/:id", async (req, res) => {
  try {
    //Recuperamos el param id
    const { id } = req.params;
    //Creamos un nuevo perro
    const newDog = new Dog(req.body);
    //Mantenemos el id por el que hemos buscado en el nuevo perro
    newDog._id = id;
    //Actualizamos el perro que ya existia con el nuevo
    await Dog.findByIdAndUpdate(id, newDog);
    //Devolvemos la respuesta
    return res.status(200).json(newDog)
  } catch (error) {
    return res.status(500).json("Error updating dog")
  }
});

//Usar las rutas en el servidor
server.use("/", router);

//Recuperamos el puerto
const PORT = process.env.PORT;

//Escuchamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
