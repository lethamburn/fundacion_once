//Template string
const firstName = "Antonio";
const lastName = "Rosales";

const fullName = `${firstName} ${lastName}`;

const template = `
<div>
  <p>${fullName}</p>
</div>`;

//Spread operator ...
const primeraFila = ["Javier", "Monica", "Gonzalo", "Mauricio"];
const segundaFila = ["Amadou", "Juanjo"];

let filasJuntas = [...primeraFila, ...segundaFila];
filasJuntas = [...filasJuntas, "Sergio"];
filasJuntas = [...filasJuntas, "David"];
filasJuntas = [...filasJuntas, "Fareh"];
console.log(filasJuntas);
console.log(..."🧑🏼‍🚀");

//Map
const suns = ["🌞", "🌞", "🌞", "🌞", "🌞"];
const rain = suns.map((sun) => "⛈️");
console.log(rain);

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num) => num * 2);
console.log(double);

const characters = [
  {
    name: "Monkey D. Luffy",
    age: 19,
    profession: "Pirate Captain",
    origin: "Dawn Island",
  },
  {
    name: "Roronoa Zoro",
    age: 21,
    profession: "Swordsman",
    origin: "Shimotsuki Village",
  },
  {
    name: "Nami",
    age: 22,
    profession: "Navigator",
    origin: "Cocoyasi Village",
  },
  {
    name: "Usopp",
    age: 19,
    profession: "Sniper",
    origin: "Syrup Village",
  },
  {
    name: "Sanji",
    age: 21,
    profession: "Chef",
    origin: "Germa Kingdom",
  },
];

const newCharacters = characters.map((character) => ({
  nombre: character.name,
  ocupacion: character.profession,
}));

console.log(newCharacters);

//Filter

const over20 = characters.filter((character) => character.age >= 20);
console.log(over20);

const allAges = characters.reduce((acc, character) => acc + character.age, 0);
console.log(allAges);

const humans = ["🧒", "🧒", "🧒", "🧒", "🐗", "🧒"];

console.log(humans.every((human) => human === "🧒"));
console.log(humans.some((human) => human === "🧒"));

const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flat(2));

const batman = {
  name: "Bruce Wayne",
  alias: "Batman",
  city: "Gotham",
};

console.log(Object.hasOwn(batman, "powers"));
console.log(["a", "b", "c", "d"].at(2));
