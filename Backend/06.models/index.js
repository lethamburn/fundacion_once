//Importamos express
const express = require("express");
//Importamos dotenv y lo configuramos
require("dotenv").config();
//Traemos la función connect de utils
const connect = require("./utils/db");
//Importamos el modelo Character
const Character = require("./src/api/models/character.model");

//Creamos el servidor
const server = express();
//Nos conectamos con la DB
connect();

//Recuperamos la variable de entorno PORT
const PORT = process.env.PORT;

//Creamos un nuevo router
const router = express.Router();
//Y vamos a crear un nuevo endpoint
router.post("/create", async (req, res) => {
  try {
    //Creo el personaje en base al modelo
    const newCharacter = new Character({
      name: "Batman",
      age: 45,
      location: "Gotham",
    });
    //Lo guardamos en la base de datos
    await newCharacter.save();
  } catch (error) {
    console.log("Error creating character");
  }
});

//Nuestro router arranca desde la barra vacia
server.use('/', router);

//Escuchamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
