//Spread Operator -> ...
const alumnos = ["Gonzalo", "Mauricio", "Javier", "David", "Oscar", "Fareh"];
const alumnas = ["Edith", "Monica", "Isabel", "Sabrina"];

const cursoDesarrollo = [...alumnos, ...alumnas, "Antonio", "Dani"];
console.log(cursoDesarrollo);

const stringEsparcido = [..."Hola"];
console.log(stringEsparcido);

let nuevoArray = [];
nuevoArray = [...nuevoArray, "Primero"];
nuevoArray = [...nuevoArray, "Segundo"];
nuevoArray = [...nuevoArray, "Tercero"];
console.log(nuevoArray);

const emojiEsparcido = [..."👩🏾‍🚀"];
console.log(emojiEsparcido);
