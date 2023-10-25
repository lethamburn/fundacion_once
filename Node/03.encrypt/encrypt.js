//Importamos File System para manejar nuestros ficheros
const fs = require("fs");
//Importamos crypto-js para encriptar nuestro documento
const crypto = require("crypto-js");
//Importamos dotenv y lo configuramos
const dotenv = require("dotenv");
dotenv.config()
//Creamos nuestra clave secreta, la que no se tiene que exponer
const secretKey = process.env.SECRET_KEY;

//Creamos la función que encripta nuestro documento. Recibe por argumento el texto a encriptar y una clave secreta
const encrypt = (text, key) => {
  //Mediante el método crypto.AES.encrypt, encriptamos nuestro texto con la clave secreta y lo almacenamos encriptado en la constante
  const encrypted = crypto.AES.encrypt(text, key);
  //Devolvemos un string a la fuerza para poder crear un texto más facilmente
  return encrypted.toString();
};

//Mediante File System vamos a leer nuestro fichero "original.txt"
fs.readFile("original.txt", "utf-8", (err, data) => {
  //Si hay algún error, lanzamos la excepción y rompemos el script
  if (err) {
    throw err;
  }
  //Si no hay ningún error, vamos a almacenar los datos del fichero en una constante pasando por la encriptación que hemos diseñado previamente
  const encryptedData = encrypt(data, secretKey);
  //Con este resultado, escribimos un nuevo documento
  fs.writeFile("encriptado.txt", encryptedData, (err) => {
    if (err) {
      throw err;
    }
    console.log("Datos encriptados correctamente");
  });
});
