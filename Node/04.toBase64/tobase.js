//Importamos el File System
const fs = require("fs");

//Vamos a almacenar la imagen con readFileSync
const image = fs.readFileSync('gato.jpeg');
//El método toString puede recibir por argumento el sistema de codificación y de caracteres
const base64Image = image.toString('base64');
//Escribimos un archivo txt con el resultado de convertir la imagen a base64
fs.writeFileSync('imagen.txt', base64Image);
