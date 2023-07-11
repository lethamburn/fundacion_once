//1º Pedimos la información a la URL con fetch
//Y ENTONCES
//2º Con esa respuesta, la convertimos a json
//Y ENTONCES
//3º Con esa respuesta en json la sacamos por consola

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => console.log(res.results));
