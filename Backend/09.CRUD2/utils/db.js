//Importamos mongoose
const mongoose = require("mongoose");
//Importamos dotenv y lo configuramos
const dotenv = require("dotenv");
dotenv.config();

//Recuperamos la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

//Creamos nuestra función de conexión con la DB
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    //A nivel informativo vamos sacar name y host de db.connection
    const { name, host } = db.connection;
    console.log(`Connected to DB: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

//Exportamos la función connect
module.exports = connect;
