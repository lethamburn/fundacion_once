let pendrive = {
  precio: 8,
  name: "Jose Antonio",
  capacidad: "64GB",
  funciona: false,
  tipo: 2.0,
  ficheros: [
    "05092023.pdf",
    "06092023.pdf",
    "Control de firmas.pdf",
    "TheFlash.mp4",
  ],
  meta: {
    format: "NTFS",
    compatiblity: "Windows, Linux, Mac",
  },
};

console.log(pendrive.capacidad);
console.log(pendrive["capacidad"]);

pendrive.name = "Señor Pendrive";
console.log(pendrive);
pendrive.origen = "China";
console.log(pendrive);
delete pendrive.origen;
console.log(pendrive);

for (const clave in pendrive) {
  console.log("El valor de " + clave + " es " + pendrive[clave]);
}
