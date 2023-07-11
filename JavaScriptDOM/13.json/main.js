const json = `
{
  "name":"Steve",
  "age": 140,
  "city":"New Jersey"
}`;

console.log("Esto es JSON:");
console.log(json);

//Esto es el json parseado
const jsonPARSED = JSON.parse(json);
console.log(jsonPARSED);

//Volvemos a convertirlo a JSON
console.log(JSON.stringify(jsonPARSED));
