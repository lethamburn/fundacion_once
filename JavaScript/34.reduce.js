const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

//

const words = [
  "Pan",
  "Lechuga",
  "Sombrilla",
  "Cabra",
  "USB",
  "Coca-Cola Light",
  "Fanta",
  "Agua",
];

const palabraMasLarga = words.reduce(
  (longest, word) => (longest.length > word.length ? longest : word),
  ""
);

console.log(palabraMasLarga);
