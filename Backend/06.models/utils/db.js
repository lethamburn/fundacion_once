//Importamos mongoose
const mongoose = require("mongoose");
//Importa dotenv y lo configuramos
require("dotenv").config();

//Recuperamos la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

//Creamos la función que se conecta con la base de datos
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Server connected to DB: ${name} in host: ${host}`);
  } catch (error) {
    console.error("Error connecting to DB");
  }
};

//Exportamos la función
module.exports = connect;
