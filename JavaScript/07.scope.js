//SCOPE GLOBAL
let firstName = "Dani";

if (firstName === "Dani") {
	//Esto es un bloque y las variables tienen alcance de bloque
	//Esto funcionaría porque estan en el mismo ambito de bloque
	let x = 10;
	console.log(x);
}

//Esto no funciona porque de bloque afuera no se puede consultar
console.log(x);
