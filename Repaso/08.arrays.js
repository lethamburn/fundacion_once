const movies = ["Top Gun", "Extraction", "Barbie", "Oppenheimmer"];

//MODIFICAN
movies.push("Crepusculo");
console.log(movies);

movies.pop();
console.log(movies);

movies.unshift("Across the Spiderverse");
console.log(movies);

movies.shift();
console.log(movies);

movies.reverse();
console.log(movies);

movies.sort();
console.log(movies);

/* const numbers = [8, 5, 6, 9, 23, 10, 2, 1];
numbers.sort((a, b) => a - b);
console.log(numbers) */

movies.splice(1, 2, "Last Voyage of Demeter");
console.log(movies);

//NO MODIFICAN
console.log(movies.concat(["Dune", "Bracula", "Matrix"]));
console.log(movies);

console.log(movies.join(", "));

console.log(movies.slice(1, 2));

movies.push("Barbie")

console.log(movies)
console.log(movies.indexOf("Barbie"));
console.log(movies.lastIndexOf("Barbie"))
console.log(movies.indexOf("Hola"))

console.log(movies.includes("Barbie"))