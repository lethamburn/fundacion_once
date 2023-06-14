const fullName = "Buzz Lightyear";

//Length
console.log(fullName.length)

//includes
console.log(fullName.includes("year"))

//repeat
const stringARepetir = "hola"
const fraseRepetida = stringARepetir.repeat(4)
console.log(fraseRepetida)

//replace
const company = "Por Talento Digital";
const newCompany = company.replace("Digital", "Analogico");
console.log(newCompany)

//replaceAll
const macarena = "Dale a tu cuerpo alegría Macarena. Que tu cuerpo es pa' darle alegría y cosa buena. Dale a tu cuerpo alegría, Macarena. Hey Macarena, ay"
const raquel = macarena.replaceAll("Macarena", "Raquel")
console.log(raquel)

//TRADUCTOR A BALLENO
const vocales = ["a", "e", "i", "u"];

let fraseNormal = "Hace mucho tiempo, en una galaxia muy lejana..."


for (const vocal of vocales) {
    fraseNormal = fraseNormal.replaceAll(vocal, "o")
}

console.log(fraseNormal)

//Traductor a Messenger
let fraseNormal2 = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...";

fraseNormal2 = fraseNormal2.replaceAll("qu", "k");
fraseNormal2 = fraseNormal2.replaceAll("dos", "2");
fraseNormal2 = fraseNormal2.replaceAll("s", "5");
fraseNormal2 = fraseNormal2.replaceAll("a", "A");
fraseNormal2 = fraseNormal2.replaceAll("H", "");
fraseNormal2 = fraseNormal2.replaceAll(",", "");

console.log(fraseNormal2)

//slice
const jugador = "Lionel Messi";
console.log(jugador.slice(2, 8))

//toLowerCase
const palabra1 = "Hola, mi nombre es Paco";
console.log(palabra1.toLowerCase())

//toUpperCase
const palabra2 = "Me gustan las empanadas de queso";
console.log(palabra2.toUpperCase())

//trim
const fraseConEspacios = "     Hola     "
console.log(fraseConEspacios.trim())

//split
const quote = "Bienvenidos al curso de desarrollo"
const quoteTroceada = quote.split(" ")
console.log(quoteTroceada)

const URL = "http://localhost:8080/gallery/user/antonio/photo.jpg"
const URLTroceada = URL.split("/")
console.log(URLTroceada[URLTroceada.length -2])