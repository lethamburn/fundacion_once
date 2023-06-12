//Arrays
let alimentos = ["Pan", "Lechuga", "Cerveza", "Galletas", "Fuet"];

//Longitud
console.log(alimentos.length); //->GO TO HELL
//Posiciones -> Estan basadas en 0 -> zero based

//Cómo acceder a cada uno de los elementos de un array
console.log(alimentos[2]);

//Arrays de objetos
let movies = [
	{
		title: "Barbie",
		year: 2023,
		reparto: [
			{
				name: "Margot Robbie",
				character: "Barbie",
				otherCharacters: [
					"Harley Quinn",
					"La mujer del Lobo de WallStreet",
					"La mujer Roman Polanski",
				],
			},
			{
				name: "Ryan Gosling",
				character: "Ken",
			},
		],
	},
	{
		title: "Spider-Man: Across the Spiderverse",
		year: 2023,
	},
];

console.log(movies[0].reparto[0].otherCharacters[0]);
