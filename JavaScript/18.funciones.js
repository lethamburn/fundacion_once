//Funciones
//Declarando una función:
function sayHello() {
	console.log("Hola!");
}
//Ejecutar la función
sayHello();

//Declarando una función con argumentos
function sayHelloWithName(name) {
	console.log("Hola " + name);
}

sayHelloWithName("Gonzalo");
sayHelloWithName("Javier");

//

function sum(numA, numB) {
	const total = numA + numB;
	console.log(total);
}

sum(8, 60);
sum(250, 785);

//
//Le hemos dado un valor por defecto a currentYear
function calculateAge(name, bornYear, currentYear = 2023) {
	const age = currentYear - bornYear;
	console.log(name + " tiene " + age + " años.");
}

calculateAge("Antonio", 1990);
calculateAge("Gonzalo", 1993);
calculateAge("Edith", 1972);
calculateAge("Gandhi", 1869, 1902);

//

function elSegurata(name, age) {
	console.log(name + " intenta entrar en la discoteca.");
	if (age >= 18) {
		console.log(name + " pudo entrar y tomarse unas copitas.");
	} else {
		console.log(name + " se tuvo que ir a su casa hasta que crezca.");
	}
}

elSegurata("Antonio", 33);
elSegurata("Gonzalo", 17);
