//Recuperamos el botón
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  //Cada vez que hacemos click alternamos la clase dark, si no la tiene el body la pone y si la tiene la quita
  document.body.classList.toggle("dark");
  //Y además, comprobaremos que si contiene la clase dark que sustituya el texto por un sol y si no por una luna
  if (document.body.classList.contains("dark")) {
    themeBtn.innerHTML = "🌞";
  } else {
    themeBtn.innerHTML = "🌑";
  }
});

//Recuperamos el main
const main = document.querySelector("main");
//Recuperamos el botón de more
const moreBtn = document.querySelector("#more-btn");
//Cuando hagamos click en el botón more...
moreBtn.addEventListener("click", () => {
  //Creo un parrafo
  const paragraph = document.createElement("p");
  //Le damos contenido al parrafo
  paragraph.innerHTML = "Hola, soy un nuevo parrafo";
  //Lo inyectamos en el main
  main.appendChild(paragraph);
});
