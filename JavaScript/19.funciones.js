//Funciones

function sumAllNums(numbers) {
	let counter = 0;
	for (const num of numbers) {
		counter += num;
	}
	console.log(counter);
}

const numberList1 = [2, 50, 4, 2, 1, 89, 100];
const numberList2 = [1, 2, 3, 4, 5, 6];

sumAllNums(numberList1);
sumAllNums(numberList2);

//

//Vamos a crear una función que reciba un elemento de un array y si está lo elimine del array
function deleteItem(elements, item) {
	//Recuperamos la posición del elemento en el array que le pasamos
	const position = elements.indexOf(item);
	if (position === -1) {
		//Si el elemento no existe:
		console.log("Inserta un elemento que exista en el array");
	} else {
		//Si el elemento existe lo eliminamos y mostramos el array por consola
		elements.splice(position, 1);
		console.log(elements);
	}
}

const superheroes = ["Hulk", "Spiderman", "Catwoman"];
deleteItem(superheroes, "Spiderman");
deleteItem(superheroes, "Iron Man");

//Retorno:
function transformerName(firstName, lastName) {
	const botFirstName = firstName + "tron";
	const botLastName = lastName + "bot";
	const botFullName = botFirstName + " " + botLastName;
	return botFullName;
}

const antonioTransformer = transformerName("Antonio", "Rosales");
console.log(antonioTransformer);

//

function sum(numA, numB) {
	const total = numA + numB;
	return total;
}

const cincoMasSeis = sum(5, 6);
console.log(cincoMasSeis);
const sieteMasOcho = sum(7, 8);

//

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
	//Inicializamos un contador a 0
	let counter = 0;
	//Recorremos cada uno de los elementos
	for (const item of param) {
		//Y los sumamos al contador
		counter += item;
	}
	const promedio = counter / param.length;
	console.log(promedio);
}

average(numbers);
