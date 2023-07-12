const superheroes = [
  {
    name: "Wolverine",
    type: "Mutant",
    power: 86,
  },
  {
    name: "Elektra",
    type: "Human",
    power: 68,
  },
  {
    name: "Iron Man",
    type: "Human",
    power: 70,
  },
  {
    name: "Storm",
    type: "Mutant",
    power: 79,
  },
];

//1º Tenemos que comprobar si hay algún mutante en los superheroes
const mutantCheck = superheroes.some(
  (superheroe) => superheroe.type === "Mutant"
);
console.log("¿Hay algún mutante?", mutantCheck);
//2º Tenemos que crear un nuevo array con solo los mutantes
const mutants = superheroes.filter(
  (superheroe) => superheroe.type === "Mutant"
);
console.log(mutants);
//3º Tenemos que crear un nuevo array con esos mutantes pero cambiandole la clave name por superheroname
const newMutants = mutants.map((mutant) => ({
  superheroname: mutant.name,
  type: mutant.type,
  power: mutant.power,
}));
console.log(newMutants);
//4º Tenemos que obtener el total de los superpoderes de los mutantes
const totalPower = newMutants.reduce((acc, mutant) => acc + mutant.power, 0);
console.log(totalPower);

//SE PUEDE HACER TODO A LA VEZ
const totalMutantPower = superheroes
  .filter((superheroe) => superheroe.type === "Mutant")
  .map((mutant) => ({
    superheroename: mutant.name,
    type: mutant.type,
    power: mutant.power,
  }))
  .reduce((acc, mutant) => acc + mutant.power, 0);

console.log(totalMutantPower);
