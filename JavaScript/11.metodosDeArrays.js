let claseDev = ["Javier", "Mercedes", "David", "Manuel", "Amadou"];

console.log(claseDev);
//Métodos que MODIFICAN el array

//pop -> Elimina el último elemento del array
claseDev.pop();
console.log(claseDev);
//push -> Inserta un/varios elemento/s en la última posición del array
claseDev.push("Sabrina");
console.log(claseDev);
//reverse -> Le da la vuelta al array
claseDev.reverse();
console.log(claseDev);
//shift -> Elimina el primer elemento de un array
claseDev.shift();
console.log(claseDev);
//unshift -> Inserta elementos en la primera posición de un array
claseDev.unshift("Sabrina", "Gonzalo", "Mauricio");
console.log(claseDev);
//sort -> Ordena por orden alfabetico los elementos de un array
claseDev.sort();
console.log(claseDev);
//splice -> Elimina una porción de nuestro array y, opcionalmente, inserta elemento/s en su lugar
claseDev.splice(2, 2, "Oscar");
console.log(claseDev);

//Métodos que NO modifican el array original
let nuevosAlumnos = ["Pepito", "Fulanito", "Menganito"];
//concat -> Concatenar un array con otro
let newCursoDev = claseDev.concat(nuevosAlumnos);
console.log(newCursoDev);
console.log(claseDev);
//join -> Convierte un array en string y como argumento recibe el caracter separador de elementos
let newCursoDevWithJoin = newCursoDev.join(", ");
console.log(newCursoDevWithJoin);
//slice -> Sirve para recuperar una porción de nuestro array, y funciona a través de posiciones
let seleccionClase = newCursoDev.slice(1, 5);
console.log(seleccionClase);
//Asi averiguamos el último elemento de un array
console.log(seleccionClase[seleccionClase.length - 1]);
//indexOf -> Encuentra la posición de un elemento en un array desde el principio
console.log(seleccionClase.indexOf("Mauricio"));
//lastIndexOf  -> Encuentra la posición de un elemento en un array desde el final
console.log(seleccionClase.lastIndexOf("Antonio"));
//includes -> Nos devuelve un booleano si encuentra o no un elemento
console.log(seleccionClase.includes("Mauricio"));
console.log(seleccionClase.includes("Antonio"));

//Combo
//Vamos a eliminar a Mauricio de la clase
let mauricioPos = seleccionClase.indexOf("Mauricio");
seleccionClase.splice(mauricioPos, 1);
console.log(seleccionClase);
