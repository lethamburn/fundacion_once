const myInput = document.querySelector("#my-input");
const myBtn = document.querySelector("#my-btn");
const myH3 = document.querySelector("#my-h3");
const deleteBtn = document.querySelector("#delete-btn")

const saveUser = () => {
  //Pintamos en el h3 el valor de input
  myH3.innerHTML = myInput.value;
  //Cada vez que pulsamos el botón guardamos en el localStorage en la clave user el valor de input
  localStorage.setItem("user", myInput.value);
};

//La funcion saveUser se ejecutará cuando hagamos click en el botón
myBtn.addEventListener("click", saveUser);
//Cuando pulsemos el botón de borrar, borraremos los datos del localStorage y del h3
deleteBtn.addEventListener("click", () => {
  myH3.innerHTML = "";
  localStorage.removeItem("user")
})

//Cada vez que arrancamos la aplicación buscamos si hay algo en la clave user del localStorage y si es asi la pintamos desde el principio
if (localStorage.getItem("user")) {
  myH3.innerHTML = localStorage.getItem("user");
}
