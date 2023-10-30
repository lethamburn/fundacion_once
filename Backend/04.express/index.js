//Importamos express
const express = require("express");
//Importamos dotenv y lo configuramos
require("dotenv").config();

//Creamos un servidor con express
const server = express();

//Almacenamos la variable de entorno PORT
const PORT = process.env.PORT;

//Escuchamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
