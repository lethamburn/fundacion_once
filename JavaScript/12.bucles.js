//Bucles
for (let i = 0; i < 5; i++) {
	console.log("Hola", i);
}

//Recorriendo arrays
const movies = ["Batman", "Terminator", "Bambi", "Matrix"];

for (let i = 0; i < movies.length; i++) {
	const movie = movies[i];
	console.log(movie);
}
//CAMARA LENTA - MOVIES.LENGTH = 4
//EJECUTAMOS EL FICHERO...Y ARRANCA EL BUCLE
//1ª VUELTA -> i = 0 -> i si es menor que movies.length -> Para la siguiente vuelta ++
//const movie = movies[0] -> Batman
//console.log(movie) -> Batman
//2ª VUELTA -> i = 1 -> i si es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[1] = "Terminator";
//console.log(movie) -> "Teminator"
//3º VUELTA -> i = 2 -> i si es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[2] = "Bambi";
//console.log(movie) -> "Bambi"
//4ª VUELTA -> i = 3 -> i es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[3] = "Matrix";
//console.log(movie) = "Matrix";
//5º VUELTA -> i = 4 -> i NO es menor que movies.length -> SE ROMPE EL BUCLE

for (let i = 0; i < 10; i++) {
	if (i === 5) {
		console.log("Hola, soy un cinco");
	} else {
		console.log(i);
	}
}
