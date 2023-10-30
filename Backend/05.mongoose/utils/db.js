//Importamos mongoose
const mongoose = require("mongoose");
//Importamos dotenv y lo configuramos
require("dotenv").config();

//Recuperamos la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

//Creamos la función de conexión con la base de datos
const connect = async () => {
  //Vamos a almacenar en un objeto llamado db los datos de nuestra conexión
  try {
    const db = await mongoose.connect(MONGO_URI, {
      //Transformamos la URI en un string legible
      useNewUrlParser: true,
      //Unificar todos los caracteres para que sea legible tambien
      useUnifiedTopology: true,
    });
    //A nivel informativo le podemos sacar las propiedades name y host a db
    const { name, host } = db.connection;
    //Los reflejamos en un console.log
    console.log(`Connected to DB: ${name} in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB");
  }
};

module.exports = connect;
