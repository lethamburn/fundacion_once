//Importamos express
const express = require("express");
//Importamos dotenv y lo configuramos
require("dotenv").config();
//Importamos la función connect de db
const connect = require("./utils/db");

//Creamos el servidor express
const server = express();

//Nos conectamos a la base de datos
connect();

//Almacenamos el PORT del dotenv
const PORT = process.env.PORT;

//Escuchamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ☑️`);
});
