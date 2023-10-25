const fs = require("fs");

const base64Image = fs.readFileSync("imagen.txt", "utf-8");

//Le pasamos el codigo al Buffer para que pueda procesarla
const bufferImage = Buffer.from(base64Image, "base64");

fs.writeFileSync("gato.png", bufferImage);
