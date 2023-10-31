//Importamos mongoose
const mongoose = require("mongoose");
//Importamos y configuramos dotenv
const dotenv = require("dotenv");
dotenv.config();

//Recuperamos la URI de Mongo
const MONGO_URI = process.env.MONGO_URI;

//Creamos la función de conexión
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected to DB: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB");
  }
};

module.exports = connect;
