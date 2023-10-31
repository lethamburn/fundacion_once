//Importamos express
const express = require("express");
//Importamos y configuramos dotenv
const dotenv = require("dotenv");
dotenv.config();

//Creamos el servidor express
const server = express();

//Creamos nuestro router
const router = express.Router();

//Vamos a definir unas rutas
router.get("/", (req, res) => {
  res.end("Bienvenidos a mi server!");
});

router.get("/alumnos", (req, res) => {
  const alumnos = [
    "Mauricio",
    "Gonzalo",
    "Oscar",
    "Monica",
    "Oscar Reloaded",
    "Javier",
  ];
  res.end(JSON.stringify(alumnos));
});

//Vamos a implementarle desde la barra vacia las diferentes rutas que le hemos implementado al router
server.use("/", router)

//Vamos a recuperar de las variables de entorno el valor de PORT
const PORT = process.env.PORT;

//Escuchamos y levantamos nuestro servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
