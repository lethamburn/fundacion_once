//Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const familiaAddams = [
  "Gómez Addams",
  "Morticia Addams",
  "Miércoles Addams",
  "Pugsley Addams",
  "Fétido Addams",
  "Abuela Addams",
  "Tío Lucas",
  "Tía Esmeralda",
  "Primo Itt",
  "Largo Addams",
  "Thing (La Mano)",
];

//Declaramos la función que por argumento recibirá una lista
function findLongestWord(list) {
  //Inicializamos una variable llamada longestWord con valor string vacío para ir metiendo si la palabra es más larga que la anterior
  let longestWord = "";
  //Recorremos la lista y sacamos cada uno de los elementos (item)
  for (const item of list) {
    //Si cada uno de los elementos del array es mayor su longitud que la de la variable que tenemos arriba, la sustituimos por ella, si no no hace nada. Por lo tanto en cada una de las vueltas del bucle va a comprobar si el elemento actual es mayor que el almacenado, si es asi se sustituira.
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  //Por lo tanto, cuando termina el bucle, se nos ha quedado almacenada en la variable longestWord la palabra más larga
  console.log("La palabra más larga es: " + longestWord);
}

//Como hemos parametrizado bien la función, acepta cualquier array de strings que le pasemos, y siempre encuentra la primera palabra más larga
findLongestWord(avengers);
findLongestWord(familiaAddams);
