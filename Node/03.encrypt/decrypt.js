//Importamos File System
const fs = require("fs");
//Importamos crypto-js
const crypto = require("crypto-js");
//Importamos dotenv y lo configuramos
const dotenv = require("dotenv");
dotenv.config()

//Creamos nuestra clave secreta, la que no se tiene que exponer
const secretKey = process.env.SECRET_KEY;

//Creamos la función decrypt
const decrypt = (text, key) => {
  //Almacenamos el texto desencriptado
  const decrypted = crypto.AES.decrypt(text, key);
  //A diferencia de la encriptacion, al estar creando un texto con formato "normal", tenemos que indicarle el set de caracteres al toString
  return decrypted.toString(crypto.enc.Utf8);
};

//Mediante File System vamos a leer nuestro fichero "original.txt"
fs.readFile("encriptado.txt", "utf-8", (err, data) => {
  //Si hay algún error, lanzamos la excepción y rompemos el script
  if (err) {
    throw err;
  }
  //Si no hay ningún error, vamos a almacenar los datos del fichero en una constante pasando por la encriptación que hemos diseñado previamente
  const decryptedData = decrypt(data, secretKey);
  //Con este resultado, escribimos un nuevo documento
  fs.writeFile("desencriptado.txt", decryptedData, (err) => {
    if (err) {
      throw err;
    }
    console.log("Datos desencriptados correctamente");
  });
});
