//Recuperamos el botón
const myBtn = document.querySelector("#myBtn");
//Añadirle un escuchador de eventos
myBtn.addEventListener("click", (ev) => {
  console.log(ev);
});

//Recuperamos el input
const myInput = document.querySelector("#myInput");
myInput.addEventListener("input", (ev) => {
  console.log(ev.target.value);
});
