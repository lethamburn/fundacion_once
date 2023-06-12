const addamsFamily = [];

const characters = ["Miercoles", "Fetido", "Gomez", "Cosa", "Eso", "Morticia"];

for (let i = 0; i < characters.length; i++) {
	const character = characters[i];
	const newName = character + " Addams";
	addamsFamily.push(newName);
}

console.log(addamsFamily);

//Vamos a crear un array de numeros que sean el doble del original
const result = [];
const numbers = [
	75, 34, 92, 18, 53, 67, 41, 86, 29, 12, 63, 88, 50, 21, 97, 45, 8, 39, 72, 59,
	25, 81, 5, 68, 32, 94, 17, 61, 83, 36, 70, 55, 14, 78, 43, 99, 24, 9, 46, 77,
	22, 49, 87, 31, 64, 93, 15, 76, 38, 66, 11,
];

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	const newNumber = number * 2;
	result.push(newNumber);
}

console.log(result);

//Vamos a calcular la media de nota de la clase
const alumnos = [
	{
		name: "Gonzalo",
		nota: 8,
	},
	{
		name: "Dani",
		nota: 3,
	},
	{
		name: "Alberto",
		nota: 2,
	},
	{
		name: "Sabrina",
		nota: 7,
	},
];

let total = 0;
const numAlumnos = alumnos.length;

for (let i = 0; i < alumnos.length; i++) {
	const alumno = alumnos[i];
	total = total + alumno.nota;
}

console.log(total / numAlumnos);
