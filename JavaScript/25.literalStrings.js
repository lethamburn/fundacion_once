//ECMAScript 6

//Literal strings
const movie = "Indiana Jones";
function productora() {
  return "Lucasfilm";
}

const frase = `La saga ${movie} tiene ${
  3 + 1
} películas, producidas por ${productora()}`;

console.log(frase);
